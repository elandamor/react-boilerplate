/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import bugsnag from 'bugsnag-js';
import createPlugin from 'bugsnag-react';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import FontFaceObserver from 'fontfaceobserver';
import 'sanitize.css/sanitize.css';

// Import apollo client
import client from './configs/apollo';

// Import root app
import App from './containers/App';

// Load the favicon and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=[name].[ext]!./.htaccess';
/* eslint-enable import/no-unresolved, import/extensions */

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const montserratObserver = new FontFaceObserver('Montserrat', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
montserratObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

const bugsnagClient = bugsnag('9d24977be84737cd07c89c02221caf9a');
const BugSnag = bugsnagClient.use(createPlugin(React));

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <BugSnag>
      <ApolloProvider client={client}>
        <Router>
          <App />
        </Router>
      </ApolloProvider>
    </BugSnag>,
    MOUNT_NODE,
  );
};

if (module.hot && MOUNT_NODE) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept('./containers/App', () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

// Chunked polyfill for browsers without Intl support
if (!global.Intl) {
  new Promise((resolve) => {
    resolve(import('intl'));
  })
    .then(() => render())
    .catch((err) => {
      throw err;
    });
} else {
  render();
}

// Persist "debug" package's enable state in localStorage
if (process.env.NODE_ENV !== 'production') {
  window.localStorage.setItem('debug', 'reactBoilerplate:*');
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  // tslint:disable-next-line:no-var-requires
  require('offline-plugin/runtime').install();
}
