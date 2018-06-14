import styled from 'styled-components';
import Carousel from 'react-slick';

import './slick.css';
import './slick-theme.css';

const Wrapper = styled(Carousel)`
  opacity: 0;
  outline: none;
  position: relative;

  &.slick-initialized {
    opacity: 1;
  }

  .c-arrow {
    align-items: center;
    bottom: -48px;
    cursor: pointer;
    display: flex;
    height: 64px;
    outline: none;
    position: absolute;
    width: 48px;
    z-index: 0;

    &:before {
      display: none;
    }

    .icon,
    .icon > svg {
      height: 20px;
      width: 20px;
    }

    &--prev {
      left: 12px;
    }

    &--next {
      right: 12px;
      transform: rotate(180deg);
    }
  }

  .slick-dots {
    bottom: -48px;

    li button::before {
      font-size: 12px;
    }
  }
`;

export default Wrapper;
