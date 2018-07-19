/**
 *
 * Asynchronously loads the component for MultiStep
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
