import styled from 'styled-components';
import { theme } from '@app/theme';

export const Wrapper = styled.div`
  touch-action: pan-x;

  display: inline-block;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: ${theme.space[2]}px;
  padding: 0;

  -webkit-touch-callout: none;
  user-select: none;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;

  .react-toggle-screenreader-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .react-toggle-track {
    width: 48px;
    height: 24px;
    padding: 0;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.background};
    transition: all 0.2s ease;
  }

  .react-toggle-track-check {
    position: absolute;
    width: 16px;
    height: 16px;
    left: 5px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    opacity: 0;
    transition: opacity 0.25s ease;
  }

  &.-checked .react-toggle-track-check {
    opacity: 1;
    transition: opacity 0.25s ease;
  }

  .react-toggle-track-x {
    position: absolute;
    width: 16px;
    height: 16px;
    right: 5px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    opacity: 1;
    transition: opacity 0.25s ease;
  }

  &.-checked .react-toggle-track-x {
    opacity: 0;
  }

  .react-toggle-thumb {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.text};
    box-sizing: border-box;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    transform: translateX(0);
  }

  &.-checked .react-toggle-thumb {
    transform: translateX(24px);
  }
`;
