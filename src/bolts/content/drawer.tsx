import React from 'react';

import styled from 'styled-components';

export enum DrawerPosition {
  BOTTOM = 'bottom',
  RIGHT = 'right',
}

interface Props {
  children?: React.ReactNode;
  className?: string;
  isOpen: boolean;
  position: DrawerPosition;
  size: string;
  theme?: any;
  style?: object;
}

const Panel = ({ children, className }: Props) => (
  <div className={className}>
    {children}
  </div>
);

const DRAWER_SPEED = '400ms';

function getPositionStyling({ isOpen, position, size, theme }: Props) {
  switch (position) {
    case DrawerPosition.BOTTOM:
      return `
        bottom: 0;
        left: 0;
        transform: ${isOpen ? 'translate(0, 0)' : 'translate(0, 110%)'};
        transition: transform ${DRAWER_SPEED} ease-in-out;
        width: 100%;
        height: ${size};
        box-shadow: 0 -1px 4px 0 ${theme.color.select.greyscale[1]};
        border-radius: 20px 20px 0 0;
      `;
    case DrawerPosition.RIGHT:
    default:
      return `
        top: 0;
        right: 0;
        transform: ${isOpen ? 'translate(0, 0)' : 'translate(110%, 0)'};
        transition: transform ${DRAWER_SPEED} ease-in-out;
        width: ${size};
        height: 100%;
        box-shadow: -1px 0 4px 0 ${theme.color.select.greyscale[1]};
        border-radius: 20px 0 0 20px;
      `;
  }
}

const PanelStyled = styled(Panel)`
  position: absolute;
  background-color: ${({ theme }) => theme.color.select.tonal[1]};;
  ${getPositionStyling}
`;

const Drawer = ({
  children,
  className,
  isOpen,
  position,
  size,
  style,
}: Props) => (
  <PanelStyled
    className={className}
    isOpen={isOpen}
    position={position}
    size={size}
    style={style}
  >
    {children}
  </PanelStyled>
);

export default Drawer;
