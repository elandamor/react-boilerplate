import React, { FC } from 'react';
import { Mutation, MutationFn, MutationProps, MutationResult } from 'react-apollo';

import LoadingBar from '../LoadingBar';

interface IWrappedMutationProps extends MutationProps {};

/**
 * @render react
 * @name WrappedMutation component
 * @description WrappedMutation component.
 * @example
 * <WrappedMutation />
 */

const WrappedMutation: FC<IWrappedMutationProps> = ({ children, ...rest }) => (
  <Mutation {...rest}>
    {(mutateFn: MutationFn, result: MutationResult) => (
      <React.Fragment>
        {result.loading && <LoadingBar loading />}
        {children(mutateFn, result)}
      </React.Fragment>
    )}
  </Mutation>
);

export default WrappedMutation;
