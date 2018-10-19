import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.palette.cardBorderColor};
  border: thin solid ${(props) => props.theme.palette.brandPrimary};
  border-radius: 100%;
  height: 48px;
  width: 48px;
`;

export default Wrapper;
