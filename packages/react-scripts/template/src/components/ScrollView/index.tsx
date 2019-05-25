import styled from 'styled-components';

import Box, { BoxStyles } from '../Box';
import { StyledSystemProps } from 'styled-system';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('ScrollView');

interface IScrollViewProps extends StyledSystemProps {}

/**
 * @render react
 * @name ScrollView component
 * @description ScrollView component.
 * @example
 * <ScrollView />
 */

const ScrollView = styled(Box)<IScrollViewProps>`
  ${BoxStyles};

  -webkit-overflow-scrolling: touch;
  overflow: auto;
  overscroll-behavior: contain;
  z-index: 0;
`;

ScrollView.defaultProps = {
  height: '100%',
};

export default ScrollView;
