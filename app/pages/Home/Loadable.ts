/**
 *
 * Asynchronously loads the component for Home
 *
 */

import * as Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('.'),
  loading: () => null,
});
