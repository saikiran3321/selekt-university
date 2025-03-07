import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

export default class Icon extends Component {
  static propTypes = {
    color: PropTypes.string,
    height: PropTypes.string,
    imgURL: PropTypes.string,
    names: PropTypes.array.isRequired,
    styles: PropTypes.string,
    viewHeight: PropTypes.string,
    viewWidth: PropTypes.string,
    width: PropTypes.string,
  }

  static defaultProps = {
    color: '#000000',
    height: '24px',
    width: '24px',
    styles: '',
    viewWidth: '24',
    viewHeight: '24',
    imgURL: undefined,
  }

  render() {
    const { names, color, width, styles, height, viewWidth, viewHeight, imgURL } = this.props
    return (
      <Fragment>
        { imgURL && <img alt="icon" src={imgURL} />}
        { !imgURL && (
        <svg
          className={styles}
          fill={color}
          height={height}
          viewBox={`0 0 ${viewWidth} ${viewHeight}`}
          width={width}
          xmlns="http://www.w3.org/2000/svg">
          { names && names.length > 0 && names.map((name, index) => (
            <Fragment>
              {name.color && <path d={name.path} fill={name.color} />}
              {!name.color && <path d={name.path} />}
            </Fragment>
          )) }
        </svg>
        )}
      </Fragment>
    )
  }
}
