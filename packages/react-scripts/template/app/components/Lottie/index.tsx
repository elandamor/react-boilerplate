import React, { FC } from 'react';
import classNames from 'classnames';
import Lottie from 'react-lottie';
// Styles
import Wrapper from './styles';

// import { makeDebugger } from '../../utils';
// const debug = makeDebugger('Lottie');

interface IProps {
  animationData: any;
  className?: string;
};

/**
 * @render react
 * @name Lottie component
 * @description Lottie component.
 * @example
 * <Lottie />
 */

const Lottie: FC<IProps> = ({ animationData, className }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Wrapper className={classNames('', className)}>
      <Lottie options={defaultOptions}
        height={400}
        width={400}
      />
    </Wrapper>
  );
};

export default Lottie;
