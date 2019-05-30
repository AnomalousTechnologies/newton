import React from 'react';

import styled from '@emotion/styled';
import PropTypes from 'prop-types';

export enum DrawerPosition {
  BOTTOM = 'bottom',
  RIGHT = 'right',
}

interface DrawerProps {
  isOpen: boolean;
  position: DrawerPosition;
  size: string;
}

interface PanelProps extends DrawerProps {
  className?: string;
  theme?: any;
}

const Panel = ({ className }: PanelProps) => (
  <div className={className} />
);

const DRAWER_SPEED = '400ms';

function getPositionStyling({ isOpen, position, size, theme }: PanelProps) {
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

const Drawer = ({ isOpen, position, size }: DrawerProps) => (
  <PanelStyled
    isOpen={isOpen}
    position={position}
    size={size}
  />
);

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  position: PropTypes.oneOf([
    DrawerPosition.RIGHT,
    DrawerPosition.BOTTOM,
  ]).isRequired,
  size: PropTypes.string.isRequired,
};

export default Drawer;
