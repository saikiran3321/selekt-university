import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'

import { Toast } from '../../components'

@inject('toastModel')
@observer
export default class ToastContainer extends Component {
  render() {
    const { toastModel } = this.props
    return (<Toast {...toastModel.toast} />)
  }
}

ToastContainer.propTypes = {
  toastModel: PropTypes.shape({
    toast: PropTypes.object,
  }),
}

ToastContainer.defaultProps = {
  toastModel: {},
}
