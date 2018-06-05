/**
 *
 * Asynchronously loads the component for ErrorBoundary
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
