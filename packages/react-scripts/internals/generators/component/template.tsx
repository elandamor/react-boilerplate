import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Query
// import getCategoriesGQL from '../../graphql/queries/getCategories.gql';
// Styles
import Wrapper from './styles';

/**
 * @render react
 * @name GetCategories container
 * @description GetCategories container.
 * @example
 * <GetCategories />
 */

interface IProps {
  className?: string;
}

interface IState {
  hasResult: boolean;
  staleResult: any;
}

// eslint-disable-next-line react/prefer-stateless-function
class GetCategories extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      hasResult: Boolean(props.expectedResult),
      // Persisted "expectedResult"
      staleResult: props.expectedResult,
    };
  }

  public componentWillReceiveProps(nextProps) {
    const { expectedResult, error, loading } = nextProps;

    if (!loading && !error) {
      const incomingResult = expectedResult;

      if (incomingResult !== undefined) {
        this.setState({
          hasResult: Boolean(incomingResult && incomingResult.length > 0),
          staleResult: incomingResult,
        });
      }
    }
  }

  public render() {
    const { className } = this.props;
    const { hasResult, staleResult } = this.state;

    return (
      <Wrapper className={classNames('c-expectedResult', className)}>
        { hasResult && expectedResult }
      </Wrapper>
    );
  }
}

// tslint:disable-next-line:interface-over-type-literal
type GQLResponse = {
  expectedResult: any,
};

type ChildProps = ChildDataProps<{}, GQLResponse>;

export default compose(
  graphql<{}, GQLResponse, {}, ChildProps>(getCategoriesGQL, {
    props: (props) => {
      const { data: { expectedResult, error, loading }} = props;

      if (error) {
        return {
          data: props.data,
          error,
          loading,
        };
      }

      if (!expectedResult) {
        return {
          data: props.data,
          loading,
        };
      }

      return {
        expectedResult: expectedResult.edges,
        data: props.data,
        loading,
      };
    },
  }),
)(GetCategories);
