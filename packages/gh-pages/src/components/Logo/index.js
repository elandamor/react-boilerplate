import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import Wrapper from './styles';

/**
 * @render react
 * @name Logo component
 * @description Logo component.
 * @example
 * <Logo />
 */

const Logo = ({ className, noanimation }) => (
  <Wrapper className={classNames('c-logo', className, {
    '-noanimation': noanimation,
  })}>
    <div className="react">
      <div className="react-inner"></div>
      <div className="react-innerdot"></div>
    </div>
  </Wrapper>
);

Logo.propTypes = {
  className: PropTypes.string,
  noanimation: PropTypes.bool,
};

export default Logo;
