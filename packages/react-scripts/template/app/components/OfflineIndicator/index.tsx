import React, { SFC } from 'react';
import classNames from 'classnames';
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

interface IProps {
  className?: string;
};

const OfflineIndicator: SFC<IProps> = ({ className }) => (
  <Wrapper className={classNames('', className)}>
    <WifiOff />
  </Wrapper>
);

export default OfflineIndicator;
