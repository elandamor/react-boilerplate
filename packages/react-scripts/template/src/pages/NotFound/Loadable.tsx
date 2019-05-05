/**
 *
 * Asynchronously loads the component for NotFound
 *
 */

import React from 'react';
import { Loadable } from '../../utils';
import LoadingBar from '../../components/LoadingBar';

export default Loadable(() => import('./index'), {
  fallback: <LoadingBar />,
});
