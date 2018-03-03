/**
 *
 * Asynchronously loads the component for Navigation
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
