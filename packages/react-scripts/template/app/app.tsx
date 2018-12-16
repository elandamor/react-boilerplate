/**
 * app.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import FontFaceObserver from 'fontfaceobserver';
import { ApolloProvider } from 'react-apollo';
import 'sanitize.css/sanitize.css';

// Import root app
import App from './containers/App';

// Import apollo client
import client from './apollo.config';

// Load the favicon
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
/* eslint-enable import/no-unresolved, import/extensions */

// Observe loading of font(s) - to remove font(s), remove typeface imports in
// global-styles.ts and remove th(is/ese) observer(s)
const merriweatherObserver = new FontFaceObserver('Merriweather', {});
const montserratObserver = new FontFaceObserver('Montserrat', {});

// When font(s) h(as/ave) been loaded, add font-family(s) to the body
Promise.all([merriweatherObserver.load(), montserratObserver.load()]).then(() => {
  document.body.classList.add('fontsLoaded');
});

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>,
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
