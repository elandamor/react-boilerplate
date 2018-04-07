/**
 *
 * Asynchronously loads the component for Dropdown
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
