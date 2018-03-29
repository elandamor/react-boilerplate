import React, { SFC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

/**
 * @render react
 * @name Navigation component
 * @description Main navigation for an app.
 * @example
 * <Navigation
 *    links={[
 *      { exact: true, label: 'Home', href: '/' },
 *      { label: 'About', href: '/about' }
 *      { label: 'Contact', href: '/contact' },
 *    ]}
 * />
 */

type Link = {
  className?: string,
  exact?: boolean,
  href: string,
  label: string,
};

interface Props {
  links: object[];
};

const Navigation:SFC<Props> = ({ links }) => (
  <Wrapper>
    <ul>
      {
        links.map((link: Link, index) => (
          <li key={index}>
            <NavLink
              exact={link.exact}
              activeClassName="-active"
              className={classNames('a-nav-item', link.className)}
              to={link.href}
            >
              {link.label}
            </NavLink>
          </li>
        ))
      }
    </ul>
  </Wrapper>
);

export default Navigation;
