import styled from 'styled-components';
import { Link } from 'react-router-dom';

import IAvatar from '../Avatar';

const Wrapper = styled.header`
  align-items: center;
  background-color: ${(props) => props.theme.palette.brandPrimary};
  border-bottom: thin solid ${(props) => props.theme.palette.cardBorderColor};
  display: flex;
  min-height: 64px;
`;

export const Logo = styled(Link)`
  flex: none;
  height: 64px;
  width: 64px;
`;

export const Title = styled.h1`
  flex-basis: 100%;
`;

export const Avatar = styled(IAvatar)`
  flex: none;
  margin-right: 8px;
`;

export default Wrapper;
