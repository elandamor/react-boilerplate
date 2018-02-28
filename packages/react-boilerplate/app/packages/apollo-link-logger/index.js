import { ApolloLink } from 'apollo-link';
import formatMessage from './formatMessage';

const loggerLink = new ApolloLink((operation, forward) => {
  /* eslint-disable no-console */
  const startTime = new Date().getTime();
  // console.log(`starting request for ${operation.operationName}`);

  return forward(operation).map((result) => {
    const operationType = operation.query.definitions[0].operation;
    const ellapsed = new Date().getTime() - startTime;

    const group = formatMessage(operationType, operation, ellapsed);
    console.groupCollapsed(...group);

    console.log('INIT', operation);
    console.log('RESULT', result);

    console.groupEnd(...group);
    /* eslint-enable no-console */

    return result;
  });
});

export default loggerLink;
