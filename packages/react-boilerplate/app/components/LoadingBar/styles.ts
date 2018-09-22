import styled from 'styled-components';

const Wrapper = styled.div`
  background: var(--brand-success);
  display: none;
  height: 2px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateX(100%);
  z-index: 10;
`;

export default Wrapper;
