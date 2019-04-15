import styled, { css } from "styled-components";
import { ICardProps } from "./index";

const Wrapper = styled.div<ICardProps>`
  border-radius: 2px;
  box-shadow: 0 10px 10px -6px rgba(214, 219, 230, 0.6);
  background-color: ${({ theme }) => theme.colors.cardBackground};
  width: 100%;

  .a-image {
    background-color: ${({ theme }) => theme.colors.sidebarBackground};
    min-height: 224px;
    width: 100%;
  }

  ${({ compact }) => compact && css`
    background-color: ${({ theme }) => theme.colors.sidebarBackground};
    border: thin solid ${({ theme }) => theme.colors.cardBorderColor};
    border-radius: 4px;
    margin: 0;

    img {
      border-radius: 4px 4px 0 0;
      height: auto;
      opacity: 0;
      width: 100%;
    }

    figcaption {
      background-color: ${({ theme }) => theme.colors.cardBorderColor};
      border-radius: 0 0 4px 4px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 64px;
      padding: 16px;
      text-align: center;
    }

    .c-details {
      font-size: 13px;

      h3 {
        margin: 0;
      }

      small {
        color: #555;
        display: none;
        margin-top: 8px;
      }
    }
  `}
`;

export const Content = styled.div<ICardProps>`
  ${({ contentPadding }) =>
    contentPadding &&
    css`
      padding: ${contentPadding}px;
    `}
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[0]};
  color: ${({ theme }) => theme.colors.textColorDark};
  line-height: 1.5;
`;

export const Title = styled.h3`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textColorDark};
  margin-top: 0;

  svg {
    margin-bottom: -6px;
    margin-right: 10px;
  }
`;

export default Wrapper;
