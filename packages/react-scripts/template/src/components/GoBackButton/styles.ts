import styled from 'styled-components';
import Button from '../Button';

const Wrapper = styled(Button)`
  position: sticky;
  top: 0;
  border-radius: 100%;
  height: 56px;
  overflow: hidden;
  width: 56px;

  i, i > svg {
    height: 24px;
    width: 24px;
  }
`;

export default Wrapper;
