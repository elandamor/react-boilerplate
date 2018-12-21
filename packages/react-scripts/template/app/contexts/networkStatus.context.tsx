import React from 'react';
import { compose, graphql } from 'react-apollo';
// Components
import { OfflineIndicator } from '../components';
// Queries
import getNetworkStatusGQL from '../graphql/queries/getNetworkStatus.gql';

import client from '../apollo.config';

// import { makeDebugger } from '../utils';
// const debug = makeDebugger('networkStatus-context');

const DEFAULT_STATE = {
  networkStatus: {
    __typename: 'NetworkStatus',
    isConnected: true,
  },
  setNetworkStatus: (status: string) => {},
};

export const NetworkStatusContext = React.createContext(DEFAULT_STATE);

interface IProps {
  networkStatus?: string,
  children: any,
}

// TODO: Make sure (on/off)Line status works cross-browser

class Provider extends React.Component<IProps, {}> {
  getNetworkStatus = true;
  state = DEFAULT_STATE;

  public componentDidMount() {
    if (navigator.onLine) {
      this.online();
    } else {
      this.offline();
    }

    window.addEventListener('online', () => this.online());
    window.addEventListener('offline', () => this.offline());
  }

  public componentWillUnmount() {
    window.removeEventListener('online', () => this.online());
    window.removeEventListener('offline', () => this.offline());
  }

  public setNetworkStatus = (networkStatus: string) => {
    this.getNetworkStatus = false;

    if (networkStatus) {
      client.writeData({
        data: {
          networkStatus: {
            __typename: 'NetworkStatus',
            isConnected: Boolean(networkStatus === 'online')
          },
        }
      });
    }

    this.setState({
      networkStatus: {
        __typename: 'NetworkStatus',
        isConnected: Boolean(networkStatus === 'online')
      }
    });
  }

  public render() {
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

  private offline() {
    this.setNetworkStatus('offline');
  }

  private online() {
    this.setNetworkStatus('online');
  }
}

const mapNetworkStatusToProps = ({ data }: any) => {
  if (data.error) {
    return {
      loading: data.loading,
      error: data.error,
    };
  }

  if (!data.networkStatus) {
    return {
      loading: data.loading,
    };
  }

  const { networkStatus } = data;

  return {
    networkStatus,
    loading: data.loading,
  };
};

export default compose(
  graphql(getNetworkStatusGQL, {
    props: (mapNetworkStatusToProps),
  }),
)(Provider);
