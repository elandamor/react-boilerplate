import React, { FC } from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';

export interface IRouteProps extends RouteProps {
  routes?: IRouteProps[];
}

interface IProps {
  location?: any;
  routes: IRouteProps[];
}

/**
 * @render react
 * @name Routes component
 * @description Routes component.
 * @example
 * <Routes
 *  routes={[
 *    {
 *      exact: true,
 *      path: '/',
 *      component: Home,
 *    }
 *  ]}
 * />
 */

const Routes: FC<IProps> = ({ location, routes }) => (
  <Switch location={location}>
    {routes.map(
      (
        { component: Component, exact, path, routes }: IRouteProps,
        index: number,
      ) => (
        <Route
          {...(exact ? { exact } : {})}
          key={index}
          path={path}
          render={(props: IRouteProps) => (
            // pass the sub-routes down to keep nesting
            // @ts-ignore
            <Component routes={routes} {...props} />
          )}
        />
      ),
    )}
  </Switch>
);

export default Routes;
