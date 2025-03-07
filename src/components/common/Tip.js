/* eslint-disable max-len */
import React, { Component } from 'react'
import cs from 'classnames'
import PropTypes from 'prop-types'
import { Icon, IconType } from '.'
import st from '../Help/style.scss'

export default class Tip extends Component {
  static propTypes = {
    message: PropTypes.func.isRequired,
  }
  render() {
    const { message } = this.props
    const { WARN } = IconType.HELP
    return (
      <div className={cs(st.block_warn)}>
        <p>
          <Icon names={[WARN]} viewHeight={'1024'} viewWidth={'1024'} />
          {message}
        </p>
      </div>
    )
  }
}
