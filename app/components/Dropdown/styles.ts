import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 8px;
  padding: 5px 12px 0;
  position: relative;

  .a-label {
    color: ${(props) => props.theme.isDark ? '#ffffff' : '#8B919D'};
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.01rem;
    margin: 0;
  }

  [role="button"] {
    -webkit-appearance: none;
    align-items: center;
    background-color: ${(props) => props.theme.palette.cardBackground};
    border: thin solid ${(props) => props.theme.palette.cardBackground};
    border-color: #E4E6E9;
    border-radius: 4px;
    color: ${(props) => props.theme.isDark ? '#ffffff' : '#000000'};
    cursor: pointer;
    display: flex;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.01rem;
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

    &[aria-expanded="true"] .icon > svg {
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

      .icon,
      .icon > svg {
        height: 8px;
        width: 16px;
      }

      .icon > svg {
        vertical-align: middle;
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
    left: 0;
    z-index: 4;
    background: #fff;
    min-width: 100%;
    opacity: 0;
    pointer-events: none;
    box-shadow: 0 2px 6px rgba(0,0,0,.2);
    border-radius: 0 0 4px 4px;
    max-height: 200px;
    overflow-y: auto;
    padding: 0;

    div {
      position: relative;
    }
  }

  [role="option"] {
    color: #333;
    padding: 8px 8px;
    cursor: pointer;
    transition: all .2s;

    &:hover {
      background-color: #dbdbdb;
    }

    &[aria-selected="true"] {
      background-color: #000000;
      color: #ffffff;
    }
  }
`;

export default Wrapper;
