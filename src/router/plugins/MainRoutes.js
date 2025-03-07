import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { MainContainer } from '../../containers'
import { PageNotFound } from '../../components'

export const MAIN_ROUTE = '/'
export const HELP_KEY_ROUTE_ABOUT = '/about'
export const HELP_KEY_ROUTE_COURSES = '/course'
export const HELP_KEY_ROUTE_BLOG = '/blog'
export const HELP_KEY_ROUTE_CONTACT = '/contact'
export const MainRoutes = () => (
  <Switch>
    <Route
      exact path={[HELP_KEY_ROUTE_ABOUT]}
      render={props => <MainContainer {...props} selectedKey={'builder'} />} />
    <Route
      exact path={[HELP_KEY_ROUTE_COURSES]}
      render={props => <MainContainer {...props} selectedKey={'preview'} />} />
    <Route
      exact path={[HELP_KEY_ROUTE_BLOG]}
      render={props => <MainContainer {...props} selectedKey={'options'} />} />
    <Route
      exact path={[HELP_KEY_ROUTE_CONTACT]}
      render={props => <MainContainer {...props} selectedKey={'options'} />} />
    <Route
      exact path={[MAIN_ROUTE]}
      render={props => <MainContainer {...props} />} />
    <Route component={PageNotFound} path="*" />
  </Switch>
)
