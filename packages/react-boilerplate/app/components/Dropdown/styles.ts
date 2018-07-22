import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 8px;
  padding: 5px 12px 0;
  position: relative;

  .a-label {
    color: ${(props) => (props.theme.isDark ? '#ffffff' : '#8B919D')};
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.01rem;
    margin: 0;
  }

  [role="button"] {
    -webkit-appearance: none;
    align-items: center;
    background-color: ${(props) => props.theme.palette.cardBackground};
    border: thin solid ${(props) => props.theme.palette.cardBorderColor};
    border-radius: 4px;
    color: ${(props) => (props.theme.isDark ? '#ffffff' : '#000000')};
    cursor: pointer;
    display: flex;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    margin: 4px 0 2px;
    outline: none;
    padding: 8px 12px;
    text-overflow: ellipsis;
    width: 100%;

    &[aria-expanded="true"] {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &[aria-expanded="true"] .c-icon > svg {
      transform: rotate(180deg);
    }

    &[aria-expanded="true"] ~ .c-dropdown__list {
      opacity: 1;
      pointer-events: auto;
      transform: none;
      visibility: visible;
    }

    .a-text {
      flex: 1;
      margin-right: 8px;
    }

    .c-icon-wrapper {
      justify-self: flex-end;

      .c-icon,
      .c-icon > svg {
        height: 8px;
        line-height: 1;
        width: 16px;
      }

      .c-icon > svg {
        transform-origin: 50% 45%;
      }
    }
  }

  .c-dropdown__list {
    -webkit-overflow-scrolling: touch;
    backface-visibility: hidden;
    visibility: hidden;
    transform: scale(0);
    transform-origin: top left;
    position: absolute;
    top: 100%;
    left: 12px;
    z-index: 0;
    background: #fff;
    margin: 0;
    opacity: 0;
    pointer-events: none;
    border: thin solid ${(props) => props.theme.palette.cardBorderColor};
    /* border-color: #E4E6E9; */
    border-top: none;
    border-radius: 0 0 4px 4px;
    max-height: 200px;
    overflow-y: auto;
    padding: 0;
    right: 12px;

    div {
      position: relative;
    }
  }

  [role="option"] {
    color: #333;
    font-size: 14px;
    padding: 8px 12px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: #dbdbdb;
    }

    &[aria-selected="true"] {
      background-color: ${(props) => props.theme.palette.cardBorderColor};
      color: ${(props) => (props.theme.isDark ? '#ffffff' : '#000000')};
      font-weight: 500;
    }
  }
`;

export default Wrapper;
