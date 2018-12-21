import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { HttpLink } from 'apollo-link-http';
import { persistCache } from 'apollo-cache-persist';
import localForage from 'localforage';

const API_URI = process.env.APOLLO_HTTP_URI;

const defaultState = {
  networkStatus: {
    __typename: 'NetworkStatus',
    isConnected: true,
  }
};

const resolvers = {
  Mutation: {
    // @ts-ignore
    updateNetworkStatus: (_, { isConnected }, { cache }) => {
      const data = {
        networkStatus: {
          __typename: 'NetworkStatus',
          isConnected
        },
      };
      cache.writeData({ data });
      return null;
    },
  }
};

const cache = new InMemoryCache();

const stateLink = withClientState({ cache, resolvers, defaults: defaultState });

const httpLink = new HttpLink({
  uri: API_URI,
});

const devHttpLink = ApolloLink.from([
  stateLink,
  httpLink,
]);

persistCache({
  cache,
  // @ts-ignore
  storage: localForage,
});

const client = new ApolloClient({
  link: devHttpLink,
  cache,
});

export default client;
