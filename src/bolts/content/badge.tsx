import React from 'react';

import styled from 'styled-components';

export enum BadgeType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DANGER = 'danger',
  WARNING = 'warning',
  SUCCESS = 'success',
}

interface BadgeProps {
  className?: string;
  icon?: React.ReactNode;
  style?: object;
  type?: BadgeType;
}

const Badge = ({
  className,
  icon,
  style,
}: BadgeProps) => (
  <div className={className} style={style}>{icon}</div>
);

Badge.defaultProps = {
  type: BadgeType.PRIMARY,
};

const BadgeStyled = styled(Badge)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  margin: 0;
  background-color: ${({ theme, type }) => theme.button[type || BadgeType.PRIMARY].background.color};
  color: ${({ theme, type }) => theme.button[type || BadgeType.PRIMARY].color};
  border: 0;
  border-radius: 50%;
  transition: background-color 200ms;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export default BadgeStyled;
