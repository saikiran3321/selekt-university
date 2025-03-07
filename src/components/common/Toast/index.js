import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { ToastContainer, toast, Zoom, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default class Toast extends Component {
  static propTypes = {
    hideToast: PropTypes.func,
    removeToast: PropTypes.bool,
    text: PropTypes.string,
    timeOut: PropTypes.number,
    type: PropTypes.string,
  }

  static defaultProps = {
    hideToast: () => {},
    removeToast: false,
    text: undefined,
    timeOut: 2000,
    type: 'success',
  }

  componentDidUpdate = () => {
    const { text, removeToast } = this.props
    if (text) {
      this.showToast()
    }
    if (removeToast) {
      this.clearToast()
    }
  }

  showToast = () => {
    const { timeOut, text, type } = this.props
    const options = {
      autoClose: timeOut,
      hideProgressBar: false,
      transition: Zoom,
    }
    switch (type) {
      case 'success':
        toast.success(text, options)
        break
      case 'error':
        toast.error(text, options)
        break
      case 'warning':
        toast.warn(text, options)
        break
      case 'info':
        toast.info(text, options)
        break
      default:
        break
    }
  }

  render() {
    return (
      <Fragment>
        <ToastContainer
          autoClose={2000}
          closeOnClick
          hideProgressBar={true}
          newestOnTop={false}
          pauseOnFocusLoss
          position="top-center"
          rtl={false}
          transition={Slide} />
      </Fragment>
    )
  }
}
