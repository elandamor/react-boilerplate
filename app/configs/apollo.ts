import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { RetryLink } from 'apollo-link-retry';
import { withClientState } from 'apollo-link-state';

const API_URI =
  process.env.NODE_ENV === 'production'
    ? process.env.APOLLO_API_PROD_URI
    : process.env.APOLLO_API_DEV_URI;

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  defaults: {
    networkStatus: {
      __typename: 'NetworkStatus',
      isConnected: true,
    },
  },
  resolvers: {
    Mutation: {
      // tslint:disable-next-line:no-shadowed-variable
      updateNetworkStatus: (_, { isConnected }, { cache }) => {
        const data = {
          networkStatus: {
            __typename: 'NetworkStatus',
            isConnected,
          },
        };
        cache.writeData({ data });
        return null;
      },
    },
  },
});

const httpLink = new BatchHttpLink({
  credentials: 'include',
  uri: API_URI,
});

const retryLink = new RetryLink();

const devHttpLink = ApolloLink.from([retryLink, stateLink, httpLink]);

const prodHttpLink = ApolloLink.from([retryLink, stateLink, httpLink]);

persistCache({
  cache,
  debug: process.env.NODE_ENV !== 'production',
  key: 'pdDB-persist',
  storage: window.localStorage,
});

const client = new ApolloClient({
  cache,
  link: process.env.NODE_ENV !== 'production' ? devHttpLink : prodHttpLink,
});

export default client;
