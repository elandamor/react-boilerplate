import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Wrapper from './styles';

/**
 * @render react
 * @name Navigation component
 * @description Main navigation for an app.
 * @example
 * <Navigation
 *    links={[
 *      { label: 'My List', href: '/my-list' },
 *      { label: 'Top Picks', href: '/top' },
 *      { label: 'Recent', href: '/recent' }
 *    ]}
 * />
 */
/* eslint-disable react/no-array-index-key */
const Navigation = ({ links }) => (
  <Wrapper>
    <ul>
      {
        links.map((link, index) => (
          <li key={index}>
            <NavLink
              exact={link.exact}
              activeClassName="-active"
              className={classNames('a-nav-item', link.className)}
              to={link.href}
              aria-label={link.label}
            >
              {link.label}
            </NavLink>
          </li>
        ))
      }
    </ul>
  </Wrapper>
);

Navigation.propTypes = {
  links: PropTypes.array.isRequired,
};

export default Navigation;
