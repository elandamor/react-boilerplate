import React, { FC } from 'react';

// import { OfflineIndicator } from '@app/components';
import { useNetworkStatus } from '@app/hooks';

const DEFAULT_STATE = {
  isOnline: true,
};

export const NetworkStatusContext = React.createContext(DEFAULT_STATE);

interface IProps {
  children: React.ReactNode;
}

const Provider: FC<IProps> = (props) => {
  const { isOnline } = useNetworkStatus();

  return (
    <NetworkStatusContext.Provider value={{ isOnline }}>
      <React.Fragment>
        {props.children}
        {/* {!isOnline && <OfflineIndicator />} */}
      </React.Fragment>
    </NetworkStatusContext.Provider>
  );
};

export default Provider;
