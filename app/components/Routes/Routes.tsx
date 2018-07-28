import React, { ComponentType, SFC } from 'react';
import { Route, Switch } from 'react-router-dom';

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

interface IRoute {
  path: string;
  component: ComponentType<any>;
  routes?: IRoute[];
}

interface IProps {
  routes: IRoute[];
}

const Routes: SFC<IProps> = ({ routes }) => (
  <Switch>
    {routes.map(
      ({ component: Component, path, routes }: IRoute, index: number) => (
        <Route
          key={index}
          path={path}
          render={(props) => (
            // pass the sub-routes down to keep nesting
            <Component routes={routes} {...props} />
          )}
        />
      ),
    )}
  </Switch>
);

export default Routes;
