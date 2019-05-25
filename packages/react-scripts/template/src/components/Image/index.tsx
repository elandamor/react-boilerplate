import React, { FC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

export interface IImageProps {
  as?: any;
  className?: string;
  src: string;
}

/**
 * @render react
 * @name Image component
 * @description Image component.
 * @example
 * <Image src="image.png" />
 */

const Image: FC<IImageProps> = ({ className, ...rest }) => (
  <Wrapper
    className={classNames('a-image', className)}
    {...rest}
  />
);

Image.defaultProps = {
  as: 'img',
}

export default Image;
