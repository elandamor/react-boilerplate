import { ApolloClient } from 'apollo-client';
import { ApolloLink, split } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { persistCache } from 'apollo-cache-persist';
import { RetryLink } from 'apollo-link-retry';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

// Custom packages
import errorLink from '../packages/apollo-link-error';
import loggerLink from '../packages/apollo-link-logger';

const API_URI =
  process.env.NODE_ENV === 'production'
    ? process.env.APOLLO_API_PROD_URI
    : process.env.APOLLO_API_DEV_URI;
const WSS_URI =
  process.env.NODE_ENV === 'production'
    ? process.env.APOLLO_WSS_PROD_URI
    : process.env.APOLLO_WSS_DEV_URI;

const cache = new InMemoryCache();

const httpLink = new BatchHttpLink({
  credentials: 'include',
  uri: API_URI,
});

const wsLink = new WebSocketLink({
  options: {
    connectionParams: {
      authToken: window.localStorage.getItem('pdDB-token') || null,
    },
    reconnect: true,
  },
  uri: WSS_URI,
});

const retryLink = new RetryLink();

const devHttpLink = ApolloLink.from([
  errorLink,
  loggerLink,
  retryLink,
  httpLink,
]);

const prodHttpLink = ApolloLink.from([retryLink, httpLink]);

interface IDefinition {
  kind: string;
  operation?: string;
}

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation }: IDefinition = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  process.env.NODE_ENV !== 'production' ? devHttpLink : prodHttpLink,
);

persistCache({
  cache,
  key: 'pdDB-persist',
  storage: window.localStorage,
});

const client = new ApolloClient({
  cache,
  link,
});

export default client;
