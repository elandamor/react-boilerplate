// tslint:disable:object-literal-sort-keys
import { Home } from '../../pages';

import { IRouteProps } from '../../components/Routes';

const routes: IRouteProps[] = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
];

export default routes;
