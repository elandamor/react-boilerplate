import React, { Component } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

/**
 * @render react
 * @name Popup container
 * @description Popup container.
 * @example
 * <Popup />
 */

// tslint:disable-next-line:interface-over-type-literal
type Styles = {
  container?: object;
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

// eslint-disable-next-line react/prefer-stateless-function
class Popup extends Component<IProps, IState> {
  protected static defaultProps: IDefaultProps = {
    styles: {
      container: null,
      overlay: null,
    },
  };

  constructor(props: IProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const { children, className, styles } = this.props;

    return (
      <Wrapper
        className={classNames('c-popup', className)}
        {...(styles.container ? { style: styles.container } : {})}
      >
        {children({ onClose: this.props.onClose })}
      </Wrapper>
    );
  }
}

export default Popup;
