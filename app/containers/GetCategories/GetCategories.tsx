/// <reference path="../../graphql/index.d.ts" />
import React, { Component } from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
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

type Category = {
  node: {
    id: string
    name: string
  }
}

interface Props {
  categories?: Array<Category>
  className?: string
  error?: object
  loading?: boolean
  onSelect(category: Category): void
}

interface State {
  hasCategories: boolean
  staleCategories: object[]
}

// eslint-disable-next-line react/prefer-stateless-function
class GetCategories extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasCategories: Boolean(props.categories && props.categories.length > 0),
      // Persisted "CATEGORIES"
      staleCategories: props.categories || [],
    };
  }

  componentWillReceiveProps(nextProps) {
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

  onSelect = (category) => {
    this.props.onSelect(category);
  }

  render() {
    const { className } = this.props;
    const { hasCategories, staleCategories } = this.state;

    let categories = null;

    categories = hasCategories && staleCategories.map((category: Category) => {
      const { node } = category;

      return (
        <Category
          key={node.id}
          onClick={() => this.onSelect(node)}
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

export default compose(
  graphql(getCategoriesGQL, {
    props: ({ data }) => {
      if (data.error) {
        return {
          error: data.error,
          loading: data.loading,
        };
      }

      if (!data.categories) {
        return {
          loading: data.loading,
        };
      }

      const { categories } = data;

      return {
        categories: categories.edges,
        loading: data.loading,
      };
    },
  }),
)(GetCategories);
