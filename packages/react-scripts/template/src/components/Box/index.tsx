import styled from 'styled-components';
import {
  alignSelf,
  borderRadius,
  borders,
  boxShadow,
  color,
  fontSize,
  height,
  maxWidth,
  minHeight,
  minWidth,
  overflow,
  position,
  top,
  width,
  zIndex,
  StyledSystemProps,
  compose,
} from 'styled-system';
// Styles
import Flex, { FlexStyles } from '../Flex';

interface IBoxProps extends StyledSystemProps {}

/**
 * @render react
 * @name Box component
 * @description Box component.
 * @example
 * <Box />
 */

export const BoxStyles = compose(
  FlexStyles,
  alignSelf,
  borders,
  borderRadius,
  boxShadow,
  color,
  fontSize,
  height,
  maxWidth,
  minHeight,
  minWidth,
  overflow,
  position,
  top,
  width,
  zIndex,
);

const Box = styled(Flex)<IBoxProps>`
  ${BoxStyles};

  box-sizing: border-box;
`;

Box.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
};

export default Box;
