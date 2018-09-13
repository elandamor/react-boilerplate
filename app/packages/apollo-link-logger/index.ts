// tslint:disable:no-console
import { ApolloLink } from 'apollo-link';
import formatMessage from './formatMessage';

const loggerLink = new ApolloLink(
  (operation, forward): any => {
    const startTime = new Date().getTime();

    return (
      forward &&
      forward(operation).map((result) => {
        const operationType = operation.query.definitions[0].kind;
        const ellapsed = new Date().getTime() - startTime;

        const group = formatMessage(operationType, operation, ellapsed);

        console.groupCollapsed(...group);

        console.info('INIT', operation);
        console.info('RESULT', result);

        console.groupEnd();

        return result;
      })
    );
  },
);

export default loggerLink;
