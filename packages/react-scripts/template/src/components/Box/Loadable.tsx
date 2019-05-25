/**
 *
 * Asynchronously loads the component for Box
 *
 */

import Loadable from '@app/utils/loadable';

export default Loadable(() => import('./index'));
