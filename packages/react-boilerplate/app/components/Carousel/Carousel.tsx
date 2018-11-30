import React from 'react';
import classNames from 'classnames';
// Components
import Icon from '../Icon';
// Styles
import Wrapper from './styles';

interface IArrowProps {
  direction?: string;
  icon: string;
  onClick?: () => void;
}

const Arrow = (props: IArrowProps) => {
  const { direction, icon, onClick } = props;

  return (
    <div
      className={classNames(
        'c-arrow',
        direction === 'next' ? 'c-arrow--next' : 'c-arrow--prev',
      )}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <Icon icon={icon} />
    </div>
  );
};

const defaultSettings = {
  nextArrow: <Arrow direction="next" icon="next" />,
  prevArrow: <Arrow direction="prev" icon="previous" />,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 300,
};

/**
 * @render react
 * @name Carousel component
 * @description Carousel component.
 * @example
 * <Carousel />
 */

interface IProps {
  className?: string;
  settings?: object;
}

class Carousel extends React.Component<IProps, {}> {
  public render() {
    const { className, settings } = this.props;

    return (
      <Wrapper
        className={classNames('c-carousel', className)}
        {...defaultSettings}
        {...settings}
      >
        {this.props.children}
      </Wrapper>
    );
  }
}

export default Carousel;
