import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;

  svg {
    color: ${({ theme }) => theme.palette.cardBorderColor};
    height: 20vw;
    max-height: 64px;
    max-width: 64px;
    width: 20vw;
  }
`;

export default Wrapper;
