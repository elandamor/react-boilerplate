import React, { SFC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

/**
 * @render react
 * @name Image component
 * @description Image component.
 * @example
 * <Image src="image.png" />
 */

interface IProps {
  as?: string,
  className?: string;
  src: string;
}

const Image: SFC<IProps> = ({ as: T, className, src, ...rest }) => (
  T ? (
    // @ts-ignore
    <T
      className={classNames('a-image -as', className)}
      style={{ backgroundImage: `url(${src})` }}
      {...rest}
    />
  ) : (
    <Wrapper
      className={classNames('a-image', className)}
      src={src}
      {...rest}
    />
  )
);

export default Image;
