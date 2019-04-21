import React, { FC, useEffect, useState } from 'react';
// Components
import { OfflineIndicator } from '../components';

const DEFAULT_STATE = {
  isConnected: true,
};

export const NetworkStatusContext = React.createContext(DEFAULT_STATE);

interface IProps {
  children: React.ReactNode;
}

const Provider: FC<IProps> = (props) => {
  const [isConnected, setIsConnected] = useState(DEFAULT_STATE.isConnected);

  const setNetworkStatus = (networkStatus: string) => {
    setIsConnected(Boolean(networkStatus === 'online'));
  };

  function offline() {
    setNetworkStatus('offline');
  }

  function online() {
    setNetworkStatus('online');
  }

  useEffect(() => {
    if (!navigator.onLine) { offline() };

    window.addEventListener('online', online);
    window.addEventListener('offline', offline);

    return () => {
      window.removeEventListener('online', online);
      window.removeEventListener('offline', offline);
    };
  }, []);

  return (
    <NetworkStatusContext.Provider value={{ isConnected }}>
      <React.Fragment>
        {props.children}
        {!isConnected && <OfflineIndicator />}
      </React.Fragment>
    </NetworkStatusContext.Provider>
  );
};

export default Provider;
