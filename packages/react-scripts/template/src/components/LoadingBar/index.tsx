import styled, { keyframes } from 'styled-components';

const shiftRightwards = keyframes`
  0% { transform: translateX(-100%) }
  40% { transform: translateX(0) }
  60% { transform: translateX(0) }
  100% { transform: translateX(100%) }
`;

/**
 * @render react
 * @name LoadingBar component
 * @description LoadingBar component.
 * @example
 * <LoadingBar />
 */

const LoadingBar = styled.div`
  animation: ${shiftRightwards} 1s ease-in-out infinite;
  animation-delay: 0.8s;
  background: var(--brand-success, #000000);
  height: 2px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateX(100%);
  z-index: 10;
`;

export default LoadingBar;
