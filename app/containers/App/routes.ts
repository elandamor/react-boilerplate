// tslint:disable:object-literal-sort-keys
import { Gallery, Home } from '../../pages';
import { Viewer } from '../../pages/Gallery';

import { IRouteProps } from '../../components/Routes/Routes';

const routes: IRouteProps[] = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    path: '/gallery',
    component: Gallery,
  },
  {
    path: '/img/:id',
    component: Viewer,
  },
];

export default routes;
