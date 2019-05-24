import React from 'react';

import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';

export enum ButtonSize {
  SMALL = 'small',
  LARGE = 'large',
}

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DANGER = 'danger',
  WARNING = 'warning',
  SUCCESS = 'success',
}

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
  size?: ButtonSize;
  type?: ButtonType;
}

const Button = ({
  className,
  children,
  icon,
}: ButtonProps) => (
  <button className={className}>{children}{icon}</button>
);

Button.defaultProps = {
  isLoading: false,
  size: ButtonSize.LARGE,
  type: ButtonType.PRIMARY,
};

const slideBackground = keyframes`
  from { background-position: 0 0; }
  to { background-position: 0 -1000px; }
`;

const loadingAnimation = ({ theme }: any) => css`
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 6px,
    ${theme.color.select.transparent.white[0]} 6px,
    ${theme.color.select.transparent.white[0]} 12px
  );
  background-attachment: fixed;
  animation: ${slideBackground} 50s linear infinite;
`;

const ButtonStyled = styled(Button)`
  display: inline-block;
  margin: 0;
  background-color: ${({ theme, type }) => theme.button[type || ButtonType.PRIMARY].background.color};
  border: 0;
  color: ${({ theme, type }) => theme.button[type || ButtonType.PRIMARY].color};
  font-family: ${({ theme }) => theme.font.family.sans};
  font-weight: 500;
  text-decoration: none;
  line-height: 1.15rem;
  overflow: visible;
  transition: width 500ms, height 500ms, padding 500ms;

  ${({ isLoading }) => isLoading ? loadingAnimation : null}

  ${({ icon, size }) => {
    switch (size) {
      case ButtonSize.SMALL:
        return `
          padding: .4rem ${icon ? '.75rem' : '1.75rem'};
          font-size: .95rem;
          border-radius: 1.75rem;
          text-transform: capitalize;

          svg {
            margin-left: 2rem;
          }
        `;
      case ButtonSize.LARGE:
      default:
        return `
          padding: .7rem ${icon ? '1rem' : '2rem'};
          font-size: 1rem;
          border-radius: 2rem;
          text-transform: uppercase;

          svg {
            margin-left: 3rem;
          }
        `;
    }
  }}

  &:focus {
    outline-color: ${({ theme, type }) => theme.button[type || ButtonType.PRIMARY].focus.color};
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme, type }) => theme.button[type || ButtonType.PRIMARY].hover.color};
  }

  svg {
    position: relative;
    top: 1px;
    width: auto;
    height: 16px;
    float: right;
  }
`;

export default ButtonStyled;
