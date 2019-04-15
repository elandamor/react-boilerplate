import React, { FC } from 'react';
import { Query, QueryProps, QueryResult } from 'react-apollo';

import LoadingBar from '../LoadingBar';

interface IWrappedQueryProps extends QueryProps {};

/**
 * @render react
 * @name WrappedQuery component
 * @description WrappedQuery component.
 * @example
 * <WrappedQuery />
 */

const WrappedQuery: FC<IWrappedQueryProps> = ({ children, ...rest }) => (
  <Query {...rest}>
    {(result: QueryResult) => {
      if (result.loading) return <LoadingBar loading />;
      if (result.error) return <span>{`Error!: ${result.error}`}</span>;

      return children(result);
    }}
  </Query>
);

export default WrappedQuery;
