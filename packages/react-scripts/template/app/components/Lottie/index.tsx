import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import ILottie from 'react-lottie';
// Styles
import Wrapper from './styles';

// import { makeDebugger } from '../../utils';
// const debug = makeDebugger('Lottie');

interface IProps {
  className?: string;
  [key: string]: any;
};

/**
 * @render react
 * @name Lottie component
 * @description Renders After Effects animations on React based on lottie-web.
 * @example
 * <Lottie animationData={require('./animation.json')} />
 */

const Lottie: FunctionComponent<IProps> = ({
  animationData,
  className,
  height = 400,
  width = 400,
  ...rest
}) => (
  <Wrapper className={classNames('', className)}>
    <ILottie
      options={{
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }}
      height={height}
      width={width}
      {...rest}
    />
  </Wrapper>
);

export default Lottie;
