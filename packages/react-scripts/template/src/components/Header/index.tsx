import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import { StyledSystemProps } from 'styled-system';
// Styles
import Wrapper from './styles';
import { useRouter } from '../../hooks';
import GoBackButton from '../GoBackButton';
import Inner from '../Inner';
import { useTransition } from 'react-spring';
import AnimatedWrapper from '../AnimatedWrapper';
import Toggle from '../Toggle';
import Flex from '../Flex';

import sun from '@app/assets/sun.png';
import moon from '@app/assets/moon.png';
import { AppContext } from '@app/containers/App';

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
  const { darkMode, setDarkMode } = useContext(AppContext);

  const showBackButton = location.state && location.state.showBackButton;
  const backButtonTrans = useTransition(showBackButton, null, {
    from: { opacity: 0, transform: 'translateX(-64px)' },
    enter: { opacity: 1, transform: 'translateX(0)'  },
    leave: { opacity: 0, transform: 'translateX(-64px)'  },
  });

  return (
    <Wrapper className={classNames('', className)} as="header" {...rest}>
      <Inner as={Flex}>
        <Flex>
          {
            showBackButton && backButtonTrans.map(({ item, key, props }) =>
              item && (
                <AnimatedWrapper key={key} style={props}>
                  <GoBackButton />
                </AnimatedWrapper>
              )
            )
          }
        </Flex>
        <Flex justifyContent="flex-end">
          <Toggle
            icons={{
              checked: (
                <img
                  src={moon}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: 'none' }}
                />
              ),
              unchecked: (
                <img
                  src={sun}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: 'none' }}
                />
              ),
            }}
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </Flex>
      </Inner>
    </Wrapper>
  );
}

Header.defaultProps = {
  bg: 'surface',
  height: [64,88],
}

export default Header;
