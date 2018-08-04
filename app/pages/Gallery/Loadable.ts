/**
 *
 * Asynchronously loads the component for Gallery
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('.'),
  loading: () => null,
});
