import React, { Fragment, PureComponent } from 'react';
import noScroll from 'no-scroll';
// Components
import ErrorBoundary from '../ErrorBoundary';
import Popup from './Popup/Loadable';
import Portal from './Portal/Loadable';

import { Scrim } from './styles';

import { calculatePosition, makeDebugger } from '../../lib';
const debug = makeDebugger('Modal');

/**
 * @render react
 * @name Modal container
 * @description Modal container.
 * @example
 * <Modal
 *  trigger={<button>Open Modal</button>}
 * >
 *  <Component />
 * </Modal>
 */

interface IDefaultProps {
  className?: string;
  closeOnDocumentClick?: boolean;
  closeOnEscape?: boolean;
  defaultOpen?: boolean;
  modalStyles?: {
    container?: object;
    inner?: object;
    overlay?: object;
  };
  offsetX?: number;
  offsetY?: number;
  onClose?: () => void;
  onOpen?: () => void;
  open?: boolean;
  popup?: boolean;
  position?: string;
}

interface IProps extends IDefaultProps {
  trigger?: JSX.Element;
}

interface IState {
  isOpen?: boolean;
  popup?: boolean;
}

// eslint-disable-next-line react/prefer-stateless-function
class Modal extends PureComponent<IProps, IState> {
  protected componentIsMounted: boolean;
  protected content: HTMLDivElement;
  protected helper: HTMLDivElement;
  protected trigger: HTMLElement;

  constructor(props: IProps) {
    super(props);

    const { defaultOpen, open, popup } = props;

    this.state = {
      popup,
      isOpen: open || defaultOpen,
    };
  }

  public componentDidMount() {
    this.componentIsMounted = true;

    const { closeOnEscape, defaultOpen } = this.props;

    if (defaultOpen) {
      this.setPosition();
    }

    if (!this.state.popup) {
      noScroll.on();
    }

    if (closeOnEscape) {
      window.addEventListener('keyup', (event) => {
        if (event.key === 'Escape') {
          this.closeModal();
        }
      });
    }
  }

  public componentWillReceiveProps(nextProps: IProps) {
    if (this.props.open === nextProps.open) {
      return;
    }

    if (nextProps.open) {
      this.openModal();
    } else {
      this.closeModal();
    }
  }

  public componentWillUnmount() {
    this.componentIsMounted = false;
  }

  public setState(nextState: IState, cb?: () => void) {
    if (this.componentIsMounted) {
      super.setState(nextState, cb);
    }
  }

  public render() {
    const { children, modalStyles, popup } = this.props;
    const { isOpen } = this.state;

    const trigger = this.props.trigger
      ? React.cloneElement(this.props.trigger, {
          onClick: this.toggleModal,
          ref: (c: HTMLElement) => (this.trigger = c),
        })
      : null;

    const T = popup ? Popup : Portal;

    return (
      <Fragment>
        {trigger}
        {isOpen && (
          <Fragment>
            {popup && (
              <Fragment>
                <div
                  key="H"
                  style={{ position: 'absolute', top: '0px', left: '0px' }}
                  ref={(c: HTMLDivElement) => (this.helper = c)}
                />
                <Scrim
                  onClick={this.closeModal}
                  {...(modalStyles && modalStyles.overlay
                    ? { style: modalStyles.overlay }
                    : {})}
                />
              </Fragment>
            )}
            <ErrorBoundary>
              <div ref={(c: HTMLDivElement) => (this.content = c)}>
                <T onClose={this.closeModal} styles={modalStyles}>
                  {children}
                </T>
              </div>
            </ErrorBoundary>
          </Fragment>
        )}
      </Fragment>
    );
  }

  private closeModal = () => {
    this.setState({ isOpen: false }, () => {
      this.props.onClose && this.props.onClose();
      noScroll.off();
    });
  };

  private openModal = () => {
    this.setState({ isOpen: true }, () => {
      this.setPosition();
      this.props.onOpen && this.props.onOpen();
      noScroll.on();
    });
  };

  private toggleModal = () => {
    if (this.state.isOpen) {
      this.closeModal();
    } else {
      this.openModal();
    }
  };

  private setPosition = () => {
    const { offsetX, offsetY, position } = this.props;
    const { popup } = this.state;

    if (!popup) {
      return;
    }

    const helper = this.helper.getBoundingClientRect();
    const trigger = this.trigger.getBoundingClientRect();
    const content = this.content.getBoundingClientRect();
    const cords = calculatePosition(trigger, content, position, null, {
      offsetX,
      offsetY,
    });

    this.content.style.position = 'absolute';
    this.content.style.top = `${cords.top - helper.top}px`;
    this.content.style.left = `${cords.left - helper.left}px`;

    if (
      window
        .getComputedStyle(this.trigger, null)
        .getPropertyValue('position') === 'static' ||
      window
        .getComputedStyle(this.trigger, null)
        .getPropertyValue('position') === ''
    ) {
      this.trigger.style.position = 'relative';
    }

    debug({ cords, offsetX, offsetY, popup, position, trigger });
  };
}

export default Modal;
