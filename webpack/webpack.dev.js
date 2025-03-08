const dotenv = require('dotenv').config()
const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

const OUTPUT_PATH = path.join(__dirname, '..', 'dist')
const PUBLIC_PATH = '/'
const extractSass = new MiniCssExtractPlugin({
  // Options similar to the same options in webpackOptions.output
  // both options are optional
  filename: '[name].css',
  chunkFilename: '[id].css',
})

module.exports = {
  devtool: 'eval',
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
  },
  output: {
    path: OUTPUT_PATH,
    filename: 'bundle.js',
    chunkFilename: '[name].js',
    publicPath: PUBLIC_PATH,
  },
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        DATA_URL: JSON.stringify(dotenv.parsed.DATA_URL),
        PAYMENT_URL: JSON.stringify(dotenv.parsed.PAYMENT_URL),
      },
    }),
    new HtmlWebpackPlugin({
      chunksSortMode: 'none',
      template: './index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({ openAnalyzer: false, analyzerPort: 8889 }),
    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'assets' },
      { from: 'src/assets/fonts', to: 'fonts' },
    ]),
    extractSass,
  ],
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
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
        test: /\.(jpe?g|png|jpg|gif|svg|ico)$/i,
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
      // },
    ],
  },
}
