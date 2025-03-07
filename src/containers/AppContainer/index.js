import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Router } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { createBrowserHistory as createHistory } from 'history'

import { sendGoogleAnalytics } from '../../constants'
import { PublicRouter } from '../../router'

const history = createHistory()

@inject('applicationModel')
@observer
export default class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.url = window.location.href
    this.state = {
      initialLoad: false,
    }
  }

  componentDidMount() {
    const { initialLoad } = this.state
    if (!initialLoad){
      if (this.props.location){
        sendGoogleAnalytics(this.props.location.pathname)
      }
      this.setState({
        initialLoad: true,
      })
    }
  }

  componentDidCatch(error, errorInfo) {
    console.error('AppContainer componentDidCatch', errorInfo, error)
  }

  changeDocumentTitle() {
    document.title = 'Infinity Learning Online'
  }

  render() {
    console.log('Inside App container')
    return (
      <Router history={history}>
        <PublicRouter />
      </Router>
    )
  }
}

AppContainer.propTypes = {
  applicationModel: PropTypes.object.isRequired,
}
