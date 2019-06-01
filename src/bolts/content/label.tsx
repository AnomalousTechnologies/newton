import React from 'react';

import styled from 'styled-components';

export enum LabelSize {
  SMALL = 'small',
  LARGE = 'large',
}

export enum LabelType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DANGER = 'danger',
  WARNING = 'warning',
  SUCCESS = 'success',
}

interface LabelProps {
  className?: string;
  children?: React.ReactNode;
  size?: LabelSize;
  style?: object;
  type?: LabelType;
}

const Label = ({
  className,
  children,
  style,
}: LabelProps) => (
  <div className={className} style={style}>{children}</div>
);

Label.defaultProps = {
  size: LabelSize.LARGE,
  type: LabelType.PRIMARY,
};

const LabelStyled = styled(Label)`
  display: inline-block;
  margin: 0;
  background-color: ${({ theme, type }) => theme.button[type || LabelType.PRIMARY].background.color};
  border: 0;
  color: ${({ theme, type }) => theme.button[type || LabelType.PRIMARY].color};
  font-family: ${({ theme }) => theme.font.family.sans};
  font-weight: 500;
  text-decoration: none;
  line-height: 1.15rem;
  overflow: visible;
  border-radius: 4px;
  transition: width 500ms, height 500ms, padding 500ms, background-color 200ms;

  ${({ size }) => {
    switch (size) {
      case LabelSize.SMALL:
        return `
          padding: .4rem .75rem;
          font-size: .95rem;
          text-transform: capitalize;
        `;
      case LabelSize.LARGE:
      default:
        return `
          padding: .7rem 2rem;
          font-size: 1rem;
          text-transform: uppercase;
        `;
    }
  }}
`;

export default LabelStyled;
