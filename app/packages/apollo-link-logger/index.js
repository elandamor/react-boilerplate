/* eslint-disable no-console */
import { ApolloLink } from 'apollo-link';
import formatMessage from './formatMessage';

const loggerLink = new ApolloLink((operation, forward) => {
  const startTime = new Date().getTime();

  return forward(operation).map((result) => {
    const operationType = operation.query.definitions[0].operation;
    const elapsed = new Date().getTime() - startTime;
    const group = formatMessage(operationType, operation, elapsed);

    console.groupCollapsed(...group);

    console.log('INIT', operation);
    console.log('RESULT', result);

    console.groupEnd(...group);

    return result;
  });
});

export default loggerLink;
