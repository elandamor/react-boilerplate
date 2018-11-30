import React from 'react';
import classNames from 'classnames';
// Components
import Icon from '../Icon';
// Styled-Components
import Wrapper from './styles';

// tslint:disable-next-line:interface-over-type-literal
type Option = {
  name: string,
  value: string | number,
};

interface IProps {
  className?: string;
  label?: string;
  name: string;
  onChange: (object) => void;
  options: Option[];
  selected?: Option;
}

interface IState {
  isExpanded: boolean;
  selected: Option;
}

class Dropdown extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    const selected = props.selected || {
      name: '',
      value: -1,
    };

    this.state = {
      isExpanded: false,
      selected,
    };

    props.onChange(this.state.selected);
  }

  public render() {
    const { className, label, name, options } = this.props;
    const { isExpanded, selected } = this.state;

    const mappedOptions = options && options.length > 0
      && options.map((option: Option) => (
        <li
          key={option.value}
          role="option"
          tabIndex={0}
          aria-selected={selected.value === option.value}
          data-option-name={option.name}
          data-option-value={option.value}
          onClick={this.handleChange}
        >
          {option.name}
        </li>
      ));

    return (
      <Wrapper
        className={classNames('c-dropdown', className)}
      >
        <div
          id={`dd-${name}`}
          className="a-label"
        >
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
          <span className="a-text">{selected.name}</span>
          <span className="c-icon-wrapper">
            <Icon
              icon="expand-arrow"
              viewBox="0 0 20 12"
            />
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
        name: target.getAttribute('data-option-name'),
        value: target.getAttribute('data-option-value'),
      },
    });

    this.handleToggle();

    this.props.onChange({
      name: target.getAttribute('data-option-name'),
      value: target.getAttribute('data-option-value'),
    });
  }

  private handleToggle = () => {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }
}

export default Dropdown;
