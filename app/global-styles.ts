import { createGlobalStyle, keyframes } from 'styled-components';

const shiftRightwards = keyframes`
  0% {
    transform: translateX(-100%)
  }

  40% {
    transform: translateX(0)
  }

  60% {
    transform: translateX(0)
  }

  100% {
    transform: translateX(100%)
  }
`;

// tslint:disable-next-line:no-unused-expression
createGlobalStyle`
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
    -moz-font-feature-settings: 'liga', 'kern' 1;
    -webkit-font-smoothing: antialiased;
    background-color: var(--body-background);
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

    &.fontsLoaded {
      font-family: 'Montserrat',-apple-system,BlinkMacSystemFont,Segoe UI
        ,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;

      h1, h2, h3, h4, h5, h6 {
        font-family: Merriweather,Georgia,serif;
      }
    }
  }

  .-loading {
    .c-loadingBar {
      display: block;
      animation: ${shiftRightwards} 1s ease-in-out infinite;
      animation-delay: .8s;
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
