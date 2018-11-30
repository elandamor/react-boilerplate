import React from 'react';
import classNames from 'classnames';
// Components
import Icon from '../Icon';
// Libraries
import { makeDebugger, shallowEqual } from '../../lib';
// Styles
import Wrapper from './styles';

const debug = makeDebugger('Dropdown');

/**
 * @render react
 * @name Dropdown component
 * @description Dropdown component.
 * @example
 * <Dropdown
 *  options={[]}
 * />
 */

class Dropdown extends React.Component<IProps, IState> {
  private static getDerivedStateFromProps(nextProps, prevState) {
    if (!shallowEqual(nextProps.selected, prevState.selected)) {
      return {
        selected: nextProps.selected,
      };
    }

    return null;
  }

  private node: HTMLElement | Node;

  constructor(props: IProps) {
    super(props);

    const selected = props.selected || {
      label: '',
      value: -1,
    };

    this.state = {
      isExpanded: false,
      selected,
    };

    props.onChange(this.state.selected);
  }

  public componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  public componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  public render() {
    const { className, label, name, options } = this.props;
    const { isExpanded, selected } = this.state;

    const mappedOptions =
      options &&
      options.length > 0 &&
      options.map((option: Option) => (
        <li
          key={option.value}
          role="option"
          tabIndex={0}
          aria-selected={selected.value === option.value}
          data-option-label={option.label}
          data-option-value={option.value}
          onClick={this.handleChange}
        >
          {option.label}
        </li>
      ));

    return (
      <Wrapper
        className={classNames('c-dropdown', className)}
        innerRef={(node) => (this.node = node)}
      >
        <div id={`dd-${name}`} className="a-label">
          {label}
        </div>
        <div
          className="c-btn"
          role="button"
          aria-expanded={isExpanded}
          aria-labelledby={`dd-${name}`}
          tabIndex={0}
          onClick={this.handleToggle}
        >
          <span className="a-text">{selected.label}</span>
          <span className="c-icon-wrapper">
            <Icon icon="expand_arrow" viewBox="0 0 20 12" />
          </span>
        </div>
        <ul
          className="c-dropdown__list"
          data-dropdown-list={name}
          aria-labelledby={`dd-${name}`}
          role="listbox"
        >
          <div>{mappedOptions}</div>
        </ul>
      </Wrapper>
    );
  }

  private handleChange = (evt) => {
    const { target } = evt;

    this.setState({
      selected: {
        label: target.getAttribute('data-option-label'),
        value: target.getAttribute('data-option-value'),
      },
    });

    this.handleToggle();

    this.props.onChange({
      label: target.getAttribute('data-option-label'),
      value: target.getAttribute('data-option-value'),
    });
  }

  private handleClick = (evt) => {
    if (this.node.contains(evt.target)) {
      return;
    }

    this.setState({
      isExpanded: false,
    });
  }

  private handleToggle = () => {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }
}

// tslint:disable-next-line:interface-over-type-literal
type Option = {
  label: string;
  value: string | number;
};

interface IProps {
  className?: string;
  label?: string;
  name: string;
  onChange?: (object) => void;
  options: Option[];
  selected?: Option;
}

interface IState {
  isExpanded: boolean;
  selected: Option;
}

export default Dropdown;
