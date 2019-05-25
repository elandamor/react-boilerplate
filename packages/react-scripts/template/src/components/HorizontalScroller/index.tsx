import React, { FC } from 'react';
import classNames from 'classnames';
import { SpaceProps } from 'styled-system';
// Styles
import Wrapper from './styles';
import Card from '../Card';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('HorizontalScroller');

interface IHorizontalScrollerProps extends SpaceProps {
  className?: string;
};

/**
 * @render react
 * @name HorizontalScroller component
 * @description HorizontalScroller component.
 * @example
 * <HorizontalScroller />
 */

const HorizontalScroller: FC<IHorizontalScrollerProps> = ({ className, ...rest }) => (
  <Wrapper className={classNames('', className)} {...rest}>
    {
      Array.from({length: 5}, (v, k) => (
        <Card
          key={k}
          image="../"
        />
      ))
    }
  </Wrapper>
);

export default HorizontalScroller;
