import styled from 'styled-components';
import { THEME } from '../../global-styles';

const Wrapper = styled.div`
  align-items: center;
  background: transparent;
  border: ${THEME.borders[1]} #aaaaaa;
  border-radius: ${THEME.space[1] / 2}px;
  display: flex;
  font-size: ${THEME.fontSizes[2]}px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-left: ${THEME.space[1] + THEME.space[1] / 2}px;
  position: relative;
  z-index: 1;

  input {
    background: transparent;
    border: none;
    flex-basis: 100%;
    font-size: ${THEME.fontSizes[2]}px;
    min-width: 280px;
    padding: ${THEME.space[2]}px ${THEME.space[1] + THEME.space[1] / 2}px ${THEME.space[2]}px 0;

    &:focus,
    &:hover {
      border: none;
      outline: none;
    }
  }
`;

export default Wrapper;
