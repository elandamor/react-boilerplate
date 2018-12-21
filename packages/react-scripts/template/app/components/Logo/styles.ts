import styled , { keyframes } from 'styled-components';
import { IProps } from './index';

const spin = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

const Wrapper = styled.div<IProps>`
  align-items: center;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  overflow: hidden;

  #react-inner {
    position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      border-radius: 50%;
      border: 6px solid ${({ offline, theme }) => offline ? theme.palette.cardBorderColor : '#61dafb' };

      transform: rotate(120deg);
  }

  #react-innerdot {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${({ offline, theme }) => offline ? theme.palette.cardBorderColor : '#61dafb' };
    margin-top: -10px;
    margin-left: -10px;
  }

  #react {
    display: block;
    position: relative;
    width: 100px;
    height: 40px;
    border-radius: 50%;
    animation: ${spin} 10s linear infinite;
    z-index: 11;

    &:before {
      content: "";
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      border-radius: 50%;
      border: 6px solid ${({ offline, theme }) => offline ? theme.palette.cardBorderColor : '#61dafb' };
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
      border: 6px solid ${({ offline, theme }) => offline ? theme.palette.cardBorderColor : '#61dafb' };
    }
  }
`;

export default Wrapper;
