/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
// Styles
import Wrapper, { Inner, Scrim } from './styles';

// import { makeDebugger } from '../../lib';
// const debug = makeDebugger('Portal');

const portalContainer = document.getElementById('portals');

/**
 * @render react
 * @name Portal container
 * @description Portal container.
 * @example
 * <Portal>
 *  <Component />
 * </Portal>
 */

// tslint:disable-next-line:interface-over-type-literal
type Styles = {
  container?: object;
  inner?: object;
  overlay?: object;
};

interface IDefaultProps {
  className?: string;
  styles?: Styles;
}

interface IProps extends IDefaultProps {
  children: any;
  onClose: () => void;
}

interface IState {
  [key: string]: any;
}

class Portal extends Component<IProps, IState> {
  protected wrapper: any;

  constructor(props: IProps) {
    super(props);

    this.wrapper = document.createElement('div');
    this.wrapper.className = classNames('c-portal', props.className);
    this.wrapper.setAttribute('role', 'dialog');
  }

  public componentDidMount() {
    portalContainer && portalContainer.appendChild(this.wrapper);
  }

  public componentWillUnmount() {
    portalContainer && portalContainer.removeChild(this.wrapper);
  }

  public render() {
    const { children, onClose, styles } = this.props;

    const childrenWithProps = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child);
      }

      return child;
    });

    return ReactDOM.createPortal(
      <Wrapper
        {...(styles && styles.container ? { style: styles.container } : {})}
      >
        <Scrim
          onClick={onClose}
          {...(styles && styles.overlay ? { style: styles.overlay } : {})}
        />
        <Inner {...(styles && styles.inner ? { style: styles.inner } : {})}>
          {React.Children.toArray(childrenWithProps)}
        </Inner>
      </Wrapper>,
      this.wrapper,
    );
  }
}

export default Portal;
