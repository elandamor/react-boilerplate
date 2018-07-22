import styled from 'styled-components';

const Wrapper = styled.div`
  .c-progress {
    appearance: none;
    border: none;
    display: block;
    margin: 12px;

    &::-webkit-progress-bar,
    &::-webkit-progress-value {
      border-radius: 24px;
      height: 4px;
    }

    &::-webkit-progress-bar {
      background-color: #ededed;
    }

    &::-webkit-progress-value {
      background-color: blue;
      transition: all 0.3s ease-in-out;
    }
  }
`;

export default Wrapper;

export {};
