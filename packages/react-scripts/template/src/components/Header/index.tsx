import React, { FC } from 'react';
import classNames from 'classnames';
import { StyledSystemProps } from 'styled-system';
// Styles
import Wrapper from './styles';
import { useRouter } from '../../hooks';
import GoBackButton from '../GoBackButton';
import Inner from '../Inner';
import { useTransition } from 'react-spring';
import AnimatedWrapper from '../AnimatedWrapper';

// import { makeDebugger } from '../../utils';
// const debug = makeDebugger('Header');

interface IHeaderProps extends StyledSystemProps {
  className?: string;
};

/**
 * @render react
 * @name Header component
 * @description Header component.
 * @example
 * <Header />
 */

const Header: FC<IHeaderProps> = ({ className, ...rest }) => {
  const { location } = useRouter();

  const showBackButton = location.state && location.state.showBackButton;
  const backButtonTrans = useTransition(showBackButton, null, {
    from: { opacity: 0, transform: 'translateX(-64px)' },
    enter: { opacity: 1, transform: 'translateX(0)'  },
    leave: { opacity: 0, transform: 'translateX(-64px)'  },
  });

  return (
    <Wrapper className={classNames('', className)} as="header" {...rest}>
      <Inner>
        {
          showBackButton && backButtonTrans.map(({ item, key, props }) =>
            item && (
              <AnimatedWrapper key={key} style={props}>
                <GoBackButton />
              </AnimatedWrapper>
            )
          )
        }
      </Inner>
    </Wrapper>
  );
}

Header.defaultProps = {
  bg: 'surface',
  height: [64,88],
}

export default Header;
