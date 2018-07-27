import React, { Fragment, PureComponent } from 'react';
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
  trigger: JSX.Element;
}

interface IState {
  isOpen: boolean;
  popup: boolean;
}

// eslint-disable-next-line react/prefer-stateless-function
class Modal extends PureComponent<IProps, IState> {
  protected static defaultProps: IDefaultProps = {
    closeOnDocumentClick: true,
    closeOnEscape: true,
    defaultOpen: false,
    offsetX: 0,
    offsetY: 0,
    onClose: () => null,
    onOpen: () => null,
    open: false,
    popup: false,
    position: 'bottom center',
  };

  protected content: HTMLElement;
  protected helper: HTMLElement;
  protected trigger: HTMLElement;

  constructor(props: IProps) {
    super(props);

    const { defaultOpen, open, popup } = props;

    this.state = {
      isOpen: open || defaultOpen,
      popup,
    };
  }

  public componentDidMount() {
    const { closeOnEscape, defaultOpen } = this.props;

    if (defaultOpen) {
      this.setPosition();
    }

    if (closeOnEscape) {
      window.addEventListener('keyup', (event) => {
        if (event.key === 'Escape') {
          this.closeModal();
        }
      });
    }
  }

  public componentWillReceiveProps(nextProps) {
    if (this.props.open === nextProps.open) {
      return;
    }

    if (nextProps.open) {
      this.openModal();
    } else {
      this.closeModal();
    }
  }

  public render() {
    const { children, modalStyles, popup } = this.props;
    const { isOpen } = this.state;

    const trigger = React.cloneElement(this.props.trigger, {
      onClick: this.toggleModal,
      ref: (c) => (this.trigger = c),
    });

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
                  ref={(c) => (this.helper = c)}
                />
                <Scrim
                  onClick={this.closeModal}
                  {...(modalStyles.overlay
                    ? { style: modalStyles.overlay }
                    : {})}
                />
              </Fragment>
            )}
            <ErrorBoundary>
              <div ref={(c) => (this.content = c)}>
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
    this.setState(
      {
        isOpen: false,
      },
      () => {
        this.props.onOpen();
      },
    );
  }

  private openModal = () => {
    this.setState(
      {
        isOpen: true,
      },
      () => {
        this.setPosition();
        this.props.onOpen();
      },
    );
  }

  private toggleModal = () => {
    if (this.state.isOpen) {
      this.closeModal();
    } else {
      this.openModal();
    }
  }

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
    this.content.style.top = cords.top - helper.top + 'px';
    this.content.style.left = cords.left - helper.left + 'px';

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
  }
}

export default Modal;
