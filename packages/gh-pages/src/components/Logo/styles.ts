import styled , { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
  overflow: hidden;

  &:not(.-noanimation) {
    .react {
      animation: ${spin} 10s linear infinite;
    }
  }

  .react-inner {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border-radius: 50%;
    border: 6px solid #61dafb;

    transform: rotate(120deg);
  }

  .react-innerdot {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #61dafb;
    margin-top: -10px;
    margin-left: -10px;
  }

  .react {
    display: block;
    position: relative;
    width: 100%;
    height: 40%;
    border-radius: 50%;
    z-index: 11;

    &:before {
      content: "";
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      border-radius: 50%;
      border: 6px solid #61dafb;
      transform: rotate(-120deg);

    }

    &:after {
      content: "";
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      border-radius: 50%;
      border: 6px solid #61dafb;
    }
  }
`;

export default Wrapper;