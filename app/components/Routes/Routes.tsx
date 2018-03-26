import React, { ComponentType, SFC } from 'react'
import { Route, Switch } from 'react-router-dom'

/**
 * @render react
 * @name Routes component
 * @description Routes component.
 * @example
 * <Routes
 *  routes={[
 *    {
 *      path: '/',
 *      component: Home,
 *    }
 *  ]}
 * />
 */

type R = {
  path: string
  component: ComponentType
  subRoutes?: Array<R>
}

type Props = {
  routes: Array<R>
}

const RouteWithSubRoutes = (route: R) => (
  <Route
    path={route.path}
    render={(props) => (
      // pass the sub-routes down to keep nesting
      <route.component routes={route.subRoutes} {...props} />
    )}
  />
)

const Routes:SFC<Props> = ({ routes }) => (
  <Switch>
    {
      routes.map((route: R, index: number) => (
        <RouteWithSubRoutes key={index} {...route} />
      ))
    }
  </Switch>
)

export default Routes
