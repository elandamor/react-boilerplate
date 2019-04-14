import styled from 'styled-components';
import { THEME } from '../../global-styles';

const Wrapper = styled.div`
  font-size: ${THEME.fontSizes[1]}px;
  font-weight: 400;

  .c-select__control {
    border: ${THEME.borders[1]} #aaaaaa;
    box-shadow: none;

    &:focus,
    &:hover {
      border: ${THEME.borders[1]} ${THEME.colors.primary};
      outline: none;
    }
  }

  .c-select__single-value {
    color: ${THEME.colors.black};
  }

  .c-select__input input {
    min-height: auto;
  }

  .c-select__indicator-separator {
    display: none;
  }

  .c-select__menu {
    z-index: 2;
  }
`;

export default Wrapper;
