/**
 * Home
 */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Joyride, { OverridableProps } from 'react-joyride';
// Styles
import Wrapper from './styles';

// For debugging only.
import { makeDebugger } from '../../lib';
const debug = makeDebugger('Home');

interface JoyrideProps extends OverridableProps {
  continuous?: boolean,
  showSkipButton?: boolean,
}

const TOUR_PROPS: JoyrideProps = {
  continuous: true,
  disableOverlayClose: true,
  floaterProps: {
    showCloseButton: false,
    styles: {
      arrow: {
        length: 12,
        spread: 24,
      },
    }
  },
  locale: {
    last: 'Done',
  },
  spotlightPadding: 0,
};

const STEP_STYLES = {
  spotlight: {
    borderRadius: 0,
  },
  tooltipContainer: {
    minHeight: '96px',
  },
  tooltipContent: {
    padding: '32px 0 16px',
  }
};

class Home extends Component<{ [key: string]: any }, {}> {
  protected wrapper: any;

  state = {
    startTour: false,
    steps: [
      {
        target: '.c-app__header',
        content: '',
        offset: 6,
        styles: {
          ...STEP_STYLES
        },
      },
      {
        target: '.c-app__nav',
        content: '',
        offset: 6,
        placement: 'top',
        styles: {
          ...STEP_STYLES
        },
      },
    ],
  }

  public componentDidMount() {
    if (localStorage.getItem('onboarding:home') !== 'off') {
      this.setState({ startTour: true });
    }
  }

  public render() {
    return (
      <Wrapper>
        <Helmet title="Home | react-boilerplate" />
        <Joyride
          callback={this.callback}
          run={this.state.startTour}
          // @ts-ignore
          steps={this.state.steps}
          {...TOUR_PROPS}
        />
      </Wrapper>
    );
  }

  private callback = (props: any) => {
    const { type } = props;
    debug({ props });

    if (type === 'tour:end') {
      localStorage.setItem('onboarding:home', 'off');
    }
  }
}

export default Home;
