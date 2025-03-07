import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { registerForGoogleAnalytics } from '../../constants'
import { Main } from '../../components'

class MainContainer extends Component {
  constructor(props) {
    super(props)
    this.url = window.location.href
  }

  componentDidMount(){
    const { history } = this.props
    registerForGoogleAnalytics(history)
  }

  render() {
    return (
      <Main {...this.props} />
    )
  }
}

export default withRouter(MainContainer)
