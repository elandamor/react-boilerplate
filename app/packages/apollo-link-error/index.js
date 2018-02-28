import { onError } from 'apollo-link-error';

import formatError from './formatError';
import formatMessage from './formatMessage';

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    const errorType = 'graphQLError';
    const group = formatMessage(errorType, operation);
    /* eslint-disable no-console */
    console.groupCollapsed(...group);

    graphQLErrors.map(({ message, path }) => {
      const error = formatError(message, path);
      console.log(...error);
      return { message, path };
    });

    console.groupEnd(...group);
    /* eslint-enable no-console */
  }

  if (networkError) {
    const errorType = 'networkError';
    const group = formatMessage(errorType, operation);
    /* eslint-disable no-console */
    console.groupCollapsed(...group);

    const error = formatError(networkError.message);
    console.log(...error);

    console.groupEnd(...group);
    /* eslint-enable no-console */
  }
});

export default errorLink;
