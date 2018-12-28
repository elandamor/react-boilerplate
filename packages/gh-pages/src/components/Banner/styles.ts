import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  flex-shrink: 0;
  padding: 5rem 1.5rem;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  color: #7d93aa;
  background-image: linear-gradient(transparent, #dae6f1);
  position: fixed;
  width: 100vw;
  z-index: 1;

  .c-extendedLogo {
    height: 96px;
    position: relative;
    width: 96px;

    .c-logo {
      height: 100%;
      width: 100%;
    }
  }

  @media (min-width: 600px) {
    font-size: 1.35rem;
    padding: 5rem 2rem;

    .c-extendedLogo {
      height: 120px;
      position: relative;
      width: 120px;
    }
  }
`;

export const Heading = styled.h1`
  line-height: 1;
  margin: 0;
`;

export const Tagline = styled.p`
  display: none;
  font-weight: 400;
  max-width: 448px;
  text-align: center;

  @media (min-width: 600px) {
    display: block;
    font-weight: 300;
    max-width: 640px;
  }
`;

export default Wrapper;
