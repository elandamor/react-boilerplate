import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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

  :root {
    --body-background: #fafafa;
    --brand-success: #34e79a;
  }

  html,
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--body-background);
    font-feature-settings: 'liga', 'kern' 1;
    font-kerning: normal;
    font-weight: 400;
    height: 100%;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    width: 100%;
  }

  html {
    overflow-x: hidden;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen
      ,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;

    h1, h2, h3, h4, h5, h6 {
      font-family: Georgia,serif;
    }

    &.fontLoaded {
      font-family: 'Montserrat',-apple-system,BlinkMacSystemFont,Segoe UI
        ,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;

      h1, h2, h3, h4, h5, h6 {
        font-family: Merriweather,Georgia,serif;
      }
    }
  }

  .-fw400 {
    font-weight: 400;
  }

  .-fw500 {
    font-weight: 500;
  }

  .-fw700 {
    font-weight: 700;
  }

  .-fw900 {
    font-weight: 900;
  }

  .sr-only {
    height: 0;
    opacity: 0;
    position: absolute;
    width: 0;
  }
`;
