import React, { SFC } from 'react';
import classNames from 'classnames';
// Contexts
import { NetworkStatusContext } from '../../contexts/networkStatus.context';
// Styles
import Wrapper from './styles';

export interface IProps {
  className?: string;
  offline?: boolean;
};

/**
 * @render react
 * @name Logo component
 * @description Logo component.
 * @example
 * <Logo />
 */

const Logo: SFC<IProps> = ({ className }) => (
  <NetworkStatusContext.Consumer>
    {({ networkStatus }) => (
      <Wrapper
        className={classNames('', className)}
        offline={!networkStatus.isConnected}
      >
        <div id="react">
          <div id="react-inner"></div>
          <div id="react-innerdot"></div>
        </div>
      </Wrapper>
    )}
  </NetworkStatusContext.Consumer>

);

export default Logo;
