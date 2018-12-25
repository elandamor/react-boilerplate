import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import Wrapper from './styles';

import Logo from '../Logo';

/**
 * @render react
 * @name ExtendedLogo component
 * @description ExtendedLogo component.
 * @example
 * <ExtendedLogo />
 */

const ExtendedLogo = ({ className, grayscale }) => (
  <Wrapper
    className={classNames('c-extendedLogo', className, {
      '-grayscale': grayscale,
    })}
  >
    <Logo noanimation />
    <Logo noanimation />
    <Logo noanimation />
    <Logo noanimation />
    <Logo noanimation />
    <Logo noanimation />
    <Logo noanimation />
    <Logo noanimation />
  </Wrapper>
);

ExtendedLogo.propTypes = {
  className: PropTypes.string,
  grayscale: PropTypes.bool,
};

ExtendedLogo.defaultProps = {
  className: '',
  grayscale: false,
};

export default ExtendedLogo;
