import React from 'react';
import classNames from 'classnames';
import { ArrowLeft } from 'react-feather';
// Styles
import Wrapper from './styles';
import { useRouter } from '../../hooks';

// import { makeDebugger } from '../../utils';
// const debug = makeDebugger('GoBackButton');

interface IGoBackButtonProps {
  className?: string;
};

/**
 * @render react
 * @name GoBackButton component
 * @description GoBackButton component.
 * @example
 * <GoBackButton />
 */

const GoBackButton = ({ className, ...rest }: IGoBackButtonProps) => {
  const { history } = useRouter();

  return (
    <Wrapper
      className={classNames('c-btn--back', className)}
      icon={<ArrowLeft />}
      onClick={() => history.goBack()}
      iconSize={24}
      iconOnly
      minWidth={56}
      size={56}
      borderRadius="50%"
      {...rest}
    />
  );
}

export default GoBackButton;
