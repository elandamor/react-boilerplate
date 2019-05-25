import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { persistCache } from 'apollo-cache-persist';
import localForage from 'localforage';

import { API_URI } from '@app/constants';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: API_URI,
});

const devHttpLink = ApolloLink.from([httpLink]);

persistCache({
  cache,
  // @ts-ignore
  storage: localForage,
});

const client = new ApolloClient({
  cache,
  link: devHttpLink,
});

export default client;
