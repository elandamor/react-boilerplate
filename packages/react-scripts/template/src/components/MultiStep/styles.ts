import styled, { css } from 'styled-components';

const Wrapper = styled.div``;

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
`;

export const Tracks = styled.ol`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 40px 0;

  ${(props: { verticalTrack: boolean }) => props.verticalTrack && css`
    align-items: flex-start;
    flex-direction: column;
  `};
`;

export const Track = styled.li`
  align-items: ${
    (props: { verticalTrack: boolean }) => props.verticalTrack
    ? 'flex-start' : 'center'
  };
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 160px;
  position: relative;

  .side-nav {
    &__wrap {
      align-items: center;
      cursor: pointer;
      display: flex;
      flex-direction: ${
        (props: { verticalTrack: boolean }) => props.verticalTrack
        ? 'row' : 'column'
      };
      justify-content: center;
      min-height: 40px;
    }

    &__circle {
      align-items: center;
      background-color: #eeeeee;
      border-radius: 50%;
      display: flex;
      height: 40px;
      justify-content: center;
      margin: 20px;
      width: 40px;

      &-inner {
        background-color: #ffffff;
        border-radius: 50%;
        display: block;
        height: 30px;
        width: 30px;
      }
    }

    &__line {
      background-color: #c0d0f3;
      border-radius: 2px;
      height: 4px;
      position: absolute;
      right: -25%;
      visibility: hidden;
      width: 50%;

      ${(props: { verticalTrack: boolean }) => props.verticalTrack && css`
        bottom: -12.5%;
        height: 25%;
        width: 4px;
        right: auto;
      `};
    }

    &__page {
      display: none;
    }
  }

  &.-done {
    .side-nav__circle {
      background-color: #c0d0f3;
    }
  }

  &.-doing {
    .side-nav__circle {
      background-color: #ffc73d;
      background-image: linear-gradient(45deg,#ffc73d,#ff722a 99%);
    }

    .side-nav__page {
      font-weight: 800;
    }
  }

  &:not(:last-child).-done {
    .side-nav__line {
      visibility: visible;
    }
  }

  &:hover {
    .side-nav__circle {
      background-color: #d5d5d5;
    }

    .-done {
      .side-nav__circle {
        background-color: #d5d5d5;
      }
    }
  }
`;

export default Wrapper;
