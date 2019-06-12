import React from 'react';

import { ModalCard } from '../bolts/content/card';
import Button, { ButtonSize, CancelIconButton } from '../bolts/inputs/button';
import P from '../bolts/typography/p';

interface Props {
  className?: string;
  children?: string;
  label: string;
  onAction: (event?: React.MouseEvent) => void;
  onCancel?: () => void;
}

const ModalAction = ({
  className,
  children,
  label,
  onAction,
  onCancel,
}: Props) => (
  <ModalCard className={className}>
    {!onCancel || <CancelIconButton onClick={onCancel} />}
    <P>{children}</P>
    <Button onClick={onAction} size={ButtonSize.SMALL}>
      {label}
    </Button>
  </ModalCard>
);

export default ModalAction;
