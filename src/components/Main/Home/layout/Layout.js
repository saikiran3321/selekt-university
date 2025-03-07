import React, { Fragment, Component } from 'react'
import Breadcrumb from './Breadcrumb'

export default class Layout extends Component {
  render() {
    const { breadcrumbTitle, children } = this.props

    return (
      <Fragment>
        <main className="main-area fix">
          {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
          {children}
        </main>
      </Fragment>
    )
  }
}
