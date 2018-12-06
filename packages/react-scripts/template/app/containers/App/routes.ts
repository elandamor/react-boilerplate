// tslint:disable:object-literal-sort-keys
import { Home, NotFound } from '../../pages';

import { IRouteProps } from '../../components/Routes';

const routes: IRouteProps[] = [
  {
    exact: true,
    path: '/',
    component: Home,
  }, {
    path: '*',
    component: NotFound,
  },
];

export default routes;
