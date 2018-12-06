import React, { SFC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

/**
 * @render react
 * @name Image component
 * @description Image component.
 * @example
 * <Image src="image.jpg" />
 */

interface IProps {
  className?: string;
  src: string;
}

const Image: SFC<IProps> = ({ className, src, ...rest }) => (
  <Wrapper
    className={classNames('a-image', className)}
    data-src={src}
    src={src}
    {...rest}
  />
);

export default Image;
