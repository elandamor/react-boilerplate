import React, { FC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('Banner');

interface IBannerProps {
  className?: string;
};

/**
 * @render react
 * @name Banner component
 * @description Banner component.
 * @example
 * <Banner />
 */

const Banner: FC<IBannerProps> = ({ className }) => (
  <Wrapper className={classNames('', className)} />
);

export default Banner;
