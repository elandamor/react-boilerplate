/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import FontFaceObserver from 'fontfaceobserver';

import 'sanitize.css/sanitize.css';

// Import root app
import App from './containers/App';

// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
// import '!file-loader?name=[name].[ext]!./images/favicon.ico';
// import '!file-loader?name=[name].[ext]!./images/icon-72x72.png';
// import '!file-loader?name=[name].[ext]!./images/icon-96x96.png';
// import '!file-loader?name=[name].[ext]!./images/icon-128x128.png';
// import '!file-loader?name=[name].[ext]!./images/icon-144x144.png';
// import '!file-loader?name=[name].[ext]!./images/icon-152x152.png';
// import '!file-loader?name=[name].[ext]!./images/icon-192x192.png';
// import '!file-loader?name=[name].[ext]!./images/icon-384x384.png';
// import '!file-loader?name=[name].[ext]!./images/icon-512x512.png';
// import '!file-loader?name=[name].[ext]!./manifest.json';
// import 'file-loader?name=[name].[ext]!./.htaccess';
/* eslint-enable import/no-unresolved, import/extensions */

// Import CSS reset and Global Styles
import './global-styles';

// Observe loading of Merriweather & Montserrat (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const merriweatherObserver = new FontFaceObserver('Merriweather', {});
const montserratObserver = new FontFaceObserver('Montserrat', {});

// When Merriweather is loaded, add a font-family using Merriweather to the body
Promise.all([merriweatherObserver.load(), montserratObserver.load()]).then(() => {
  document.body.classList.add('fontsLoaded');
}, () => {
  document.body.classList.remove('fontsLoaded');
});

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    MOUNT_NODE,
  );
};

if (module.hot) {
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
  (new Promise((resolve) => {
    resolve(import('intl'));
  }))
    .then(() => Promise.all([
      import('intl/locale-data/jsonp/en.js'),
    ]))
    .then(() => render())
    .catch((err) => {
      throw err;
    });
} else {
  render();
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  // tslint:disable-next-line:no-var-requires
  require('offline-plugin/runtime').install();
}
