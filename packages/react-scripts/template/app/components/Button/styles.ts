import styled, { css } from 'styled-components';
import { color, space } from 'styled-system';
import { IButtonProps } from './index';
import { THEME } from '../../global-styles';

const Wrapper = styled.button<IButtonProps>`
  ${color};
  ${space};
  align-items: center;
  background: transparent;
  border: none;
  border-radius: ${THEME.space[1] / 2}px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  display: flex;
  font-size: ${THEME.fontSizes[2]}px;
  font-weight: ${THEME.fontWeights[4]};
  justify-content: center;
  letter-spacing: .0892857143em;
  min-height: ${THEME.space[4] + (THEME.space[1] / 2)}px;
  min-width: ${THEME.space[8]}px;
  opacity: ${({ disabled, raised }) => raised && disabled ? '0.38' : '1'};
  outline: none;
  padding: ${THEME.space[1]}px;
  position: relative;
  text-transform: uppercase;
  z-index: 1;

  i {
    pointer-events: none;
    z-index: 1;
  }

  i, i > svg {
    height: ${({ iconSize }) => iconSize ? iconSize : '18'}px;
    width: ${({ iconSize }) => iconSize ? iconSize : '18'}px;
  }

  label {
    pointer-events: none;
    z-index: 1;

    ${({ icon, iconPosition }) =>
      icon && iconPosition !== 'right' && css`
        margin-left: ${THEME.space[1]}px;
      `
    };

    ${({ icon, iconPosition }) =>
      icon && iconPosition === 'right' && css`
        margin-right: ${THEME.space[1]}px;
      `
    };
  }

  &:after, &:before {
    content: '';
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 0;
  }

  &:not([disabled]) {
    &:focus {
      &:before {
        ${({ raised }) => !raised && css`
          background-color: ${THEME.colors.blacks[3]};
        `};
      }

      &:after {
        ${({ raised }) => raised && css`
          background-color: ${THEME.colors.whites[3]};
        `};
      }
    }

    &:hover {
      &:before {
        ${({ raised }) => !raised && css`
          background-color: ${THEME.colors.blacks[2]};
        `};
      }

      &:after {
        ${({ raised }) => raised && css`
          background-color: ${THEME.colors.blacks[2]};
        `};
      }
    }
  }

  ${({ outlined }) => outlined && css`
    border: ${THEME.borders[1]} ${THEME.colors.blacks[3]};
    padding: ${THEME.space[1]}px ${THEME.space[2]}px;
  `};

  ${({ backgroundColor, raised, textColor }) => raised && css`
    background-color: ${backgroundColor || THEME.colors.primary};
    box-shadow:
      0 3px 1px -2px ${THEME.colors.blacks[4]},
      0 2px 2px 0 ${THEME.colors.blacks[3]},
      0 1px 5px 0 ${THEME.colors.blacks[3]};
    color: ${textColor || THEME.colors.white};
    padding: ${THEME.space[1]}px ${THEME.space[2]}px;
  `};

  ${({ icon, iconPosition }) =>
    icon && iconPosition !== 'right'  && css`
      padding-left: ${THEME.space[1] / 2}px;
    `
  };

  ${({ icon, iconPosition }) =>
    icon && iconPosition === 'right'  && css`
      padding-right: ${THEME.space[1] / 2}px;
    `
  };

  ${({ icon, iconPosition, outlined, raised }) =>
    icon && iconPosition !== 'right' && (outlined || raised) && css`
      padding-left: ${THEME.space[1] + (THEME.space[1] / 2)}px;
    `
  };

  ${({ icon, iconPosition, outlined, raised }) =>
    icon && iconPosition === 'right' && (outlined || raised) && css`
      padding-right: ${THEME.space[1] + (THEME.space[1] / 2)}px;
    `
  };

  ${({ iconOnly }) => iconOnly && css`
      min-width: 40px;
      padding: 0;
    `
  };
`;

export default Wrapper;
