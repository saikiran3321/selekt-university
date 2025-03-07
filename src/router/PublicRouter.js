import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { MainRoutes } from '.'

const PublicRouter = () => (
  <Fragment>
    <Switch>
      <Route component={MainRoutes} path="*" />
    </Switch>
  </Fragment>
)

export default PublicRouter
