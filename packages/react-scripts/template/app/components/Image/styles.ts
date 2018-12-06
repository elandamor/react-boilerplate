import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
`;

const Wrapper = styled.img`
  background-color: #e8e8e8;
  height: auto;
  width: 100%;

  &.-lazy {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
    height: auto;
    visibility: hidden;
    width: 100%;
  }

  &.-lazy--loaded {
    animation-duration: 3s;
    animation-name: ${fadeIn};
    visibility: visible;
  }
`;

export default Wrapper;
