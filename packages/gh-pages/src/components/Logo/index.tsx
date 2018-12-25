import React, { SFC } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import Wrapper from './styles';

interface IProps {
  className?: string;
  noanimation?: boolean;
}

/**
 * @render react
 * @name Logo component
 * @description Logo component.
 * @example
 * <Logo />
 */

const Logo:SFC<IProps> = ({ className, noanimation }) => (
  <Wrapper className={classNames('c-logo', className, {
    '-noanimation': noanimation,
  })}>
    <div className="react">
      <div className="react-inner"></div>
      <div className="react-innerdot"></div>
    </div>
  </Wrapper>
);

export default Logo;
