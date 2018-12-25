import React from 'react';
// Components
import { OfflineIndicator } from '../components';
// Queries

// import { makeDebugger } from '../utils';
// const debug = makeDebugger('networkStatus-context');

const DEFAULT_STATE = {
  networkStatus: {
    __typename: 'NetworkStatus',
    isConnected: true,
  },
  setNetworkStatus: () => {},
};

export const NetworkStatusContext = React.createContext(DEFAULT_STATE);

// TODO: Make sure (on/off)Line status works cross-browser
class Provider extends React.Component {
  constructor() {
    super();

    this.state = DEFAULT_STATE;

    this.getNetworkStatus = true;
  }

  componentDidMount() {
    if (navigator.onLine) {
      this.online();
    } else {
      this.offline();
    }

    window.addEventListener('online', () => this.online());
    window.addEventListener('offline', () => this.offline());
  }

  componentWillUnmount() {
    window.removeEventListener('online', () => this.online());
    window.removeEventListener('offline', () => this.offline());
  }

  setNetworkStatus = (networkStatus) => {
    this.getNetworkStatus = false;

    if (!networkStatus) {
      return null;
    }

    this.setState({
      networkStatus: {
        __typename: 'NetworkStatus',
        isConnected: Boolean(networkStatus === 'online')
      }
    });

    return true;
  }

  render() {
    return (
      <NetworkStatusContext.Provider
        value={{
          ...this.state,
          setNetworkStatus: this.setNetworkStatus,
        }}
      >
        <React.Fragment>
          {this.props.children}
          {
            !this.state.networkStatus.isConnected && (
              <OfflineIndicator />
            )
          }
        </React.Fragment>
      </NetworkStatusContext.Provider>
    );
  }

  offline() {
    this.setNetworkStatus('offline');
  }

  online() {
    this.setNetworkStatus('online');
  }
}

export default Provider;
