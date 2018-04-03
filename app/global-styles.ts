// tslint:disable:max-line-length
import { injectGlobal } from 'styled-components';

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  * {
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    /* outline: thin dashed red; */
  }

  *::-webkit-scrollbar {
    width: 0px !important;
    height: 2px !important
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.2)
  }

  *::-webkit-scrollbar-track {
    background: rgba(255,255,255,0.08)
  }

  html,
  body {
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: 'liga', 'kern' 1;
    -webkit-font-smoothing: antialiased;
    font-kerning: normal;
    font-weight: 400;
    height: 100%;
    letter-spacing: 0.01rem;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    width: 100%;
  }

  html {
    overflow-x: hidden;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  }

  .sr-only {
    height: 0;
    opacity: 0;
    position: absolute;
    width: 0;
  }
`;
