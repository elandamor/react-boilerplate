import styled from 'styled-components';

const Wrapper = styled.div`
  .c-app__nav {
    background-color: ${(props) => props.theme.palette.brandPrimary};
    border-top: thin solid ${(props) => props.theme.palette.cardBorderColor};
    bottom: 0;
    left: 0;
    min-height: 64px;
    position: fixed;
    width: 100%;
  }
`;

export default Wrapper;
