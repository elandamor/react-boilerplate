import React, { Component } from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import { ChildDataProps, compose, graphql } from 'react-apollo';
// Query
import getCategoriesGQL from '../../graphql/queries/getCategories.gql';
// Styles
import Wrapper, { Category } from './styles';

/**
 * @render react
 * @name GetCategories container
 * @description GetCategories container.
 * @example
 * <GetCategories
 *  onSelect={handleSelect}
 * />
 */

interface ICategory {
  node: {
    id: string,
    name: string,
  };
}

interface IProps {
  categories?: ICategory[];
  className?: string;
  onSelect(category: ICategory): void;
}

interface IState {
  hasCategories: boolean;
  staleCategories: ICategory[];
}

// eslint-disable-next-line react/prefer-stateless-function
class GetCategories extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      hasCategories: Boolean(props.categories && props.categories.length > 0),
      // Persisted "CATEGORIES"
      staleCategories: props.categories || [],
    };
  }

  public componentWillReceiveProps(nextProps) {
    const { categories, error, loading } = nextProps;

    if (!loading && !error) {
      const incomingCategories = categories;

      if (incomingCategories !== undefined) {
        this.setState({
          hasCategories: Boolean(incomingCategories && incomingCategories.length > 0),
          staleCategories: incomingCategories,
        });
      }
    }
  }

  public render() {
    const { className } = this.props;
    const { hasCategories, staleCategories } = this.state;

    let categories = null;

    categories = hasCategories && staleCategories.map((category: ICategory) => {
      const { node } = category;

      return (
        <Category
          key={node.id}
          onClick={() => this.props.onSelect(category)}
        >
          { node.name }
        </Category>
      );
    });

    return (
      <Wrapper className={cls('c-categories', className)}>
        { hasCategories && categories }
      </Wrapper>
    );
  }
}

// tslint:disable-next-line:interface-over-type-literal
type GQLProps = {
  categories: {
    edges: ICategory[],
  },
};

type ChildProps = ChildDataProps<{}, GQLProps>;

export default compose(
  graphql<{}, GQLProps, {}, ChildProps>(getCategoriesGQL, {
    props: (props) => {
      const { data: { categories, error, loading }} = props;

      if (error) {
        return {
          data: props.data,
          error,
          loading,
        };
      }

      if (!categories) {
        return {
          data: props.data,
          loading,
        };
      }

      return {
        categories: categories.edges,
        data: props.data,
        loading,
      };
    },
  }),
)(GetCategories);
