import styled, { css } from 'styled-components';
import { IButtonProps } from '.';
import { THEME } from '../../global-styles';

const Wrapper = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  border-radius: ${THEME.spacing[0] / 2}px;
  cursor: ${({ disabled }: IButtonProps) => disabled ? 'not-allowed' : 'pointer'};
  display: flex;
  font-size: 14px;
  justify-content: center;
  letter-spacing: .0892857143em;
  min-height: ${THEME.spacing[3] + (THEME.spacing[0] / 2)}px;
  min-width: ${THEME.spacing[7]}px;
  opacity: ${({ disabled, raised }: IButtonProps) => raised && disabled ? '0.38' : '1'};
  outline: none;
  padding: ${THEME.spacing[0]}px;
  position: relative;
  text-transform: uppercase;
  z-index: 1;

  i, i > svg {
    height: 18px;
    width: 18px;
  }

  label {
    pointer-events: none;
    z-index: 1;

    ${({ icon, iconPosition }: IButtonProps) => icon && iconPosition !== 'right' && css`
      margin-left: ${THEME.spacing[0]}px;
    `};

    ${({ icon, iconPosition }: IButtonProps) => icon && iconPosition === 'right' && css`
      margin-right: ${THEME.spacing[0]}px;
    `};
  }

  &:after, &:before {
    content: '';
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }

  &:before {
    z-index: 0;
  }

  &:not([disabled]) {
    &:focus {
      &:before {
        ${({ raised }: IButtonProps) => !raised && css`
          background-color: rgba(0,0,0,0.08);
        `};
      }

      &:after {
        ${({ raised }: IButtonProps) => raised && css`
          background-color: rgba(255,255,255,0.08);
        `};
      }
    }

    &:hover {
      &:before {
        ${({ raised }: IButtonProps) => !raised && css`
          background-color: rgba(0,0,0,0.04);
        `};
      }

      &:after {
        ${({ raised }: IButtonProps) => raised && css`
          background-color: rgba(0,0,0,0.04);
        `};
      }
    }
  }

  ${({ outlined }: IButtonProps) => outlined && css`
    border: 1px solid rgba(0,0,0,0.12);
    padding: ${THEME.spacing[0]}px ${THEME.spacing[1]}px;
  `};

  ${({ backgroundColor, raised, textColor }: IButtonProps) => raised && css`
    background-color: ${backgroundColor || '#2D68EE'};
    box-shadow:
      0 3px 1px -2px rgba(0,0,0,.2),
      0 2px 2px 0 rgba(0,0,0,.14),
      0 1px 5px 0 rgba(0,0,0,.12);
    color: ${textColor || '#FFFFFF'};
    padding: ${THEME.spacing[0]}px ${THEME.spacing[1]}px;
  `};

  ${({ icon, iconPosition }: IButtonProps) => icon && iconPosition !== 'right'  && css`
    padding-left: ${THEME.spacing[0] / 2}px;
  `};

  ${({ icon, iconPosition }: IButtonProps) => icon && iconPosition === 'right'  && css`
    padding-right: ${THEME.spacing[0] / 2}px;
  `};

  ${({ icon, iconPosition, outlined, raised }: IButtonProps) => icon && iconPosition !== 'right' && (outlined || raised) && css`
    padding-left: ${THEME.spacing[0] + (THEME.spacing[0] / 2)}px;
  `};

  ${({ icon, iconPosition, outlined, raised }: IButtonProps) => icon && iconPosition === 'right' && (outlined || raised) && css`
    padding-right: ${THEME.spacing[0] + (THEME.spacing[0] / 2)}px;
  `};
`;

export default Wrapper;
