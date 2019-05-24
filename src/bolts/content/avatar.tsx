import React from 'react';

import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import UserIcon from '../icons/user';

export enum AvatarSize {
  SMALL = '32px',
  LARGE = '64px',
}

interface AvatarProps {
  name: string;
  onClick?: () => void;
  size?: AvatarSize;
  src?: string;
}

interface MaskProps {
  className?: string;
  children: any;
  onClick?: () => void;
  size?: AvatarSize;
}

const Mask = ({
  className,
  children,
  onClick,
}: MaskProps) => (
  <div className={className} onClick={onClick} role={onClick ? 'button' : 'img'}>
    {children}
  </div>
);

Mask.defaultProps = {
  size: AvatarSize.LARGE,
};

const MaskStyled = styled(Mask)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  overflow: hidden;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.select.tonal[1]};
  transition: width 500ms, height 500ms;

  img {
    width: 100%;
    height: 100%;
  }

  svg {
    width: 60%;
    height: 60%;

    path {
      fill: ${(props) => props.theme.color.select.tonal[4]};
    }
  }
`;

const Avatar = ({ name, onClick, size, src }: AvatarProps) => {
  const userImage = <img src={src} alt={name} title={name} />;
  const placeholderImage = <UserIcon title={name} />;
  return (
    <MaskStyled onClick={onClick} size={size}>
      {src ? userImage : placeholderImage}
    </MaskStyled>
  );
};

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  src: PropTypes.string,
};

export default Avatar;
