import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 24px 0;
  position: relative;
`;

const Tracker = styled.ol`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  width: 100%;

  li {
    align-items: center;
    cursor: pointer;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
    position: relative;

    .c-icon {
      border: 4px solid red;
      border-radius: 100%;
      display: block;
      height: 48px;
      margin-bottom: 12px;
      width: 48px;
    }

    &.-doing,
    &.-done {
      .c-icon {
        background-color: red;
      }
    }

    &.-doing,
    &.-done {
      &:not(:first-child):before {
        background-color: red;
        content: '';
        height: 4px;
        left: -50%;
        margin-top: -2px;
        position: absolute;
        top: 24px;
        width: 100%;
      }
    }
  }
`;

const Actions = styled.div``;

export default Wrapper;

export { Actions, Tracker };
