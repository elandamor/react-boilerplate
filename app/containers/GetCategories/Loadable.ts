/**
 *
 * Asynchronously loads the component for GetCategories
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
