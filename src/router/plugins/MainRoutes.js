import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { MainContainer } from '../../containers'
import { PageNotFound } from '../../components'

export const MAIN_ROUTE = '/'
export const HELP_KEY_ROUTE_ABOUT = '/about'
export const HELP_KEY_ROUTE_COURSES = '/course'
export const HELP_KEY_ROUTE_BLOG = '/blog'
export const HELP_KEY_ROUTE_CONTACT = '/contact'
export const HELP_KEY_ROUTE_COURSES_WITH_ID = '/course/:id'
export const HELP_KEY_ROUTE_BLOG_WITH_ID = '/blog/:id'
export const MainRoutes = () => (
  <Switch>
    <Route
      exact path={[HELP_KEY_ROUTE_ABOUT]}
      render={props => <MainContainer {...props} selectedKey={'about'} />} />
    <Route
      exact path={[HELP_KEY_ROUTE_COURSES]}
      render={props => <MainContainer {...props} selectedKey={'course'} />} />
    <Route
      exact path={[HELP_KEY_ROUTE_BLOG]}
      render={props => <MainContainer {...props} selectedKey={'blog'} />} />
    <Route
      exact path={[HELP_KEY_ROUTE_CONTACT]}
      render={props => <MainContainer {...props} selectedKey={'contact'} />} />
    <Route
      path={HELP_KEY_ROUTE_BLOG_WITH_ID}
      render={props => <MainContainer {...props} selectedKey={'blog'} />}
    />
    <Route
      path={HELP_KEY_ROUTE_COURSES_WITH_ID}
      render={props => <MainContainer {...props} selectedKey={'course'} />}
    />
    <Route
      exact path={[MAIN_ROUTE]}
      render={props => <MainContainer {...props} />} />
    <Route component={PageNotFound} path="*" />
  </Switch>
)
