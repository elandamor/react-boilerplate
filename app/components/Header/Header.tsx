import React, { SFC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper, { Avatar, Logo, Title } from './styles';

/**
 * @render react
 * @name Header component
 * @description Header component.
 * @example
 * <Header />
 */

interface IProps {
  className?: string;
};

const Header: SFC<IProps> = ({ className }) => (
  <Wrapper className={classNames('c-app__header', className)}>
    <Logo to="/" />
    <Title />
    <Avatar />
  </Wrapper>
);

export default Header;
