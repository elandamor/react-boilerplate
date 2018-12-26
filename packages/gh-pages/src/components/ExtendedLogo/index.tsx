import React, { SFC } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import Wrapper from './styles';

import Logo from '../Logo';

interface IProps {
  className?: string;
  grayscale?: boolean;
};

/**
 * @render react
 * @name ExtendedLogo component
 * @description ExtendedLogo component.
 * @example
 * <ExtendedLogo />
 */

const ExtendedLogo:SFC<IProps> = ({ className, grayscale }) => (
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

export default ExtendedLogo;
