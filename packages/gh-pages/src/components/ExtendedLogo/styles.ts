import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: .6;
  position: fixed;
  top: 50%;

  &:not(.-grayscale) {
    opacity: 1;

    .c-logo {
      .react:after,
      .react:before,
      .react-inner {
        border: thin solid #61dafb;
        opacity: 0.2;
      }
    }

    .c-logo:first-child {
      .react:after,
      .react:before,
      .react-inner {
        border-width: 3px;
        opacity: 1;
      }
    }
  }

  .c-logo {
    height: 90vw;
    position: absolute;
    width: 90vw;
    z-index: 0;

    &:first-child {
      z-index: 1;
    }

    &:nth-child(2) {
      transform: rotate(30deg);
    }

    &:nth-child(3) {
      transform: rotate(45deg);
    }

    &:nth-child(4) {
      transform: rotate(75deg);
    }

    &:nth-child(5) {
      transform: rotate(7deg);
    }

    &:nth-child(6) {
      transform: rotate(22deg);
    }

    &:nth-child(7) {
      transform: rotate(38deg);
    }

    &:nth-child(8) {
      transform: rotate(53deg);
    }

    .react:after,
    .react:before,
    .react-inner {
      border: thin solid #eaeaea;
    }

    .react-innerdot {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .c-logo {
      height: 90vh;
      width: 90vh;
    }
  }
`;

export default Wrapper;
