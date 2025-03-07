const dotenv = require('dotenv').config()
const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')

const BUILD_DIR_NAME = 'build'
const PUBLIC_PATH = '/'

const OUTPUT_PATH = path.join(__dirname, '..', BUILD_DIR_NAME)
const extractSass = new MiniCssExtractPlugin({
  // Options similar to the same options in webpackOptions.output
  // both options are optional
  filename: '[name].[hash].css',
  chunkFilename: '[id].[hash].css',
})

const pathsToClean = [
  BUILD_DIR_NAME,
]

const cleanOptions = {
  root: path.join(__dirname, '..'),
  verbose: true,
  dry: false,
}

const prodConfig = {
  NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  DATA_URL: JSON.stringify(dotenv.parsed.PROD_DATA_URL),
  PAYMENT_URL: JSON.stringify(dotenv.parsed.PROD_PAYMENT_URL),
}
const devConfig = {
  NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  DATA_URL: JSON.stringify(dotenv.parsed.DATA_URL),
  PAYMENT_URL: JSON.stringify(dotenv.parsed.PAYMENT_URL),
}

let envVariablesConfig = { ...devConfig }
if (process.env.NODE_ENV === 'production') {
  envVariablesConfig = { ...prodConfig }
}

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill',
    './src/index',
  ],
  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'node-static',
          chunks: 'all',
          enforce: true,
        },
      },
    },
    minimizer: [
    //   new TerserJSPlugin({
    //   extractComments: true,
    //   cache: true,
    //   parallel: true,
    //   sourceMap: true, // Must be set to true if using source-maps in production
    //   terserOptions: {
    //     warnings: false,
    //     extractComments: 'all',
    //     compress: {
    //       drop_console: true,
    //     },
    //   }
    // }),
      new OptimizeCSSAssetsPlugin({})],
  },
  output: {
    path: OUTPUT_PATH,
    filename: 'bundle.[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: PUBLIC_PATH,
  },
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': envVariablesConfig,
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    new HtmlWebpackPlugin({
      template: `${process.env.NODE_ENV}_index.html`, // relative path to the HTML files
      filename: 'index.html', // output HTML files
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
      chunksSortMode: 'none',
    }),
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'assets' },
      { from: './index.html' },
    ]),
    extractSass,
  ],
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [{
      test: /^(?!.*\.spec\.js$).*\.js$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
        {
          loader: 'eslint-loader',
          options: {
            quiet: true,
          },
        },
      ],
    },
    {
      test: /(components|containers).*\.(scss)$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            localsConvention: 'camelCase',
            modules: {
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
        },
        'sass-loader',
      ],
    },
    {
      test: /(components|containers).*\.(css)$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            localsConvention: 'camelCase',
            modules: {
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
        },
        'sass-loader',
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: loader => [
              require('postcss-import')(),
              require('postcss-css-variables')(),
              require('autoprefixer'),
            ],
          },
        },
      ],
    },
    {
      test: /(assets|node_modules).*\.(css|scss)$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            localsConvention: 'camelCase',
            modules: {
              localIdentName: '[local]',
            },
          },
        },
        'sass-loader',
      ],
    },
    {
      test: /\.(woff2|woff)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loaders: ['url-loader?limit=10000&minetype=application/font-woff&name=/fonts/[name].[ext]'],
      include: /fonts/,
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loaders: ['url-loader?name=/fonts/[name].[ext]'],
      include: /fonts/,
    },
    {
      test: /\.(jpe?g|png|gif|svg|ico)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
          },
        },
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: false,
            optimizationLevel: 7,
            interlaced: false,
          },
        },
      ],
      include: /images/,
    },
    // {
    //   test: /\.json$/,
    //   exclude: /node_modules/,
    //   loaders: ['json-loader'],
    // }
  ],
  },
}
