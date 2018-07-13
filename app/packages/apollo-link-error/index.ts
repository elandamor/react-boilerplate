// tslint:disable:no-console
import { onError } from 'apollo-link-error';

import formatError from './formatError';
import formatMessage from './formatMessage';

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    const errorType = 'graphQLError';
    const group = formatMessage(errorType, operation);

    console.groupCollapsed(...group);

    graphQLErrors.map(({ message, path }) => {
      const error = formatError(message, path);
      console.log(...error);
      return { message, path };
    });

    console.groupEnd();
  }

  if (networkError) {
    const errorType = 'networkError';
    const group = formatMessage(errorType, operation);

    console.groupCollapsed(...group);

    const error = formatError(networkError.message);
    console.log(...error);

    console.groupEnd();
  }
});

export default errorLink;
