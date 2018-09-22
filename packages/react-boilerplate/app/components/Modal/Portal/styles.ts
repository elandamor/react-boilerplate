import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

const Scrim = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
`;

const Inner = styled.div`
  background-color: ${({ theme }) => theme.palette.cardBackground};
  min-height: 200px;
  min-width: 320px;
  z-index: 1;
`;

export default Wrapper;

export { Inner, Scrim };
