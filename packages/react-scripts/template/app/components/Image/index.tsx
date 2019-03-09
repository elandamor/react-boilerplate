import React, { FC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

interface IProps {
  as?: string;
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

const Image: FC<IProps> = ({ as: T, className, src, ...rest }) =>
  T ? (
    // @ts-ignore
    <T
      className={classNames('a-image -as', className)}
      style={{ backgroundImage: `url(${src})` }}
      {...rest}
    />
  ) : (
    <Wrapper className={classNames('a-image', className)} src={src} {...rest} />
  );

export default Image;
