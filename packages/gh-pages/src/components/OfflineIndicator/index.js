import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { WifiOff } from 'react-feather';
// Styles
import Wrapper from './styles';

/**
 * @render react
 * @name OfflineIndicator component
 * @description OfflineIndicator component.
 * @example
 * <OfflineIndicator />
 */

const OfflineIndicator = ({ className }) => (
  <Wrapper className={classNames('', className)}>
    <WifiOff />
  </Wrapper>
);

OfflineIndicator.propTypes = {
  className: PropTypes.string,
}

export default OfflineIndicator;
