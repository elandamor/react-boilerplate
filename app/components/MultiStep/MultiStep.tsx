import React, { Component } from 'react';
import classNames from 'classnames';
// Components
import Button from '../Button';
// Styles
import Wrapper, { Actions, Tracker } from './styles';

// import { makeDebugger } from '../../lib';
// const debug = makeDebugger('MultiStep');

/**
 * @render react
 * @name MultiStep container
 * @description MultiStep container.
 * @example
 * const steps = [
 *  { name: 'StepOne', component: <StepOne /> },
 *  { name: 'StepTwo', component: <StepTwo /> },
 *  { name: 'StepThree', component: <StepThree /> },
 * ];
 *
 * <MultiStep steps={steps} />
 */

interface IProps {
  className?: string;
  onSubmit: () => void;
  steps: Array<{
    component: JSX.Element;
    name: string;
  }>;
}

interface IState {
  [key: string]: any;
}

const getNavStates = (indx, length) => {
  const styles = [];

  for (let i = 0; i < length; i++) {
    if (i < indx) {
      styles.push('done');
    } else if (i === indx) {
      styles.push('doing');
    } else {
      styles.push('todo');
    }
  }
  return { current: indx, styles };
};

const checkNavState = (currentStep, stepsLength) => {
  if (currentStep > 0 && currentStep < stepsLength - 1) {
    return {
      showDoneBtn: false,
      showNextBtn: true,
      showPreviousBtn: true,
    };
  } else if (currentStep === 0) {
    return {
      showDoneBtn: false,
      showNextBtn: true,
      showPreviousBtn: false,
    };
  } else {
    return {
      showDoneBtn: true,
      showNextBtn: false,
      showPreviousBtn: true,
    };
  }
};

// eslint-disable-next-line react/prefer-stateless-function
class MultiStep extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      currentStep: 0,
      navState: getNavStates(0, this.props.steps.length),
      showNextBtn: true,
      showPreviousBtn: false,
    };
  }

  public setNavState = (next) => {
    this.setState({
      navState: getNavStates(next, this.props.steps.length),
    });
    if (next < this.props.steps.length) {
      this.setState({ currentStep: next });
    }
    this.setState(checkNavState(next, this.props.steps.length));
  }

  public handleKeyDown = (event) => {
    if (event.which === 13) {
      this.next();
    }
  }

  public handleClick = (event) => {
    const { steps } = this.props;

    if (
      event.currentTarget.value === steps.length - 1 &&
      this.state.currentStep === steps.length - 1
    ) {
      this.setNavState(steps.length);
    } else {
      this.setNavState(event.currentTarget.value);
    }
  }

  public next = () => {
    this.setNavState(this.state.currentStep + 1);
  }

  public previous = () => {
    const { currentStep } = this.state;

    if (currentStep > 0) {
      this.setNavState(currentStep - 1);
    }
  }

  public renderSteps = () => {
    const { navState } = this.state;

    return this.props.steps.map((s, i) => (
      <li
        className={classNames('c-step', ` -${navState.styles[i]}`)}
        onClick={this.handleClick}
        key={i}
        value={i}
      >
        <i className="c-icon" />
        <span>{this.props.steps[i].name}</span>
      </li>
    ));
  }

  public render() {
    const { className } = this.props;

    return (
      <Wrapper
        className={classNames('', className)}
        onKeyDown={this.handleKeyDown}
      >
        <Tracker>{this.renderSteps()}</Tracker>
        {this.props.steps[this.state.currentStep].component}
        <Actions>
          <Button onClick={this.previous}>Previous</Button>
          {!this.state.showDoneBtn ? (
            <Button onClick={this.next}>Next</Button>
          ) : (
            <Button onClick={() => this.props.onSubmit()}>Done</Button>
          )}
        </Actions>
      </Wrapper>
    );
  }
}

export default MultiStep;
