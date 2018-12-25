import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% { opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(8px); opacity: 0;}
`;

const Wrapper = styled.div`
  border: thin solid #aeaeae;
  border-radius: 24px;
  bottom: 24px;
  height: calc(24px * 1.5);
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  width: 24px;
  z-index: 5;

  &:after {
    background-color: #aeaeae;
    border-radius: 4px;
    content: '';
    display: block;
    height: 6px;
    margin: 8px auto;
    animation: ${scroll} 2s ease-in-out infinite;
    width: 2px;
  }

  @media (min-width: 600px) {
    bottom: 48px;
  }
`;

export default Wrapper;
