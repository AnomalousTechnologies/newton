import React from 'react';

import { ModalCard } from '../bolts/content/card';
import { CancelIconButton } from '../bolts/inputs/button';
import P from '../bolts/typography/p';

interface Props {
  buttons: React.ReactNode;
  children?: string;
  className?: string;
  onCancel?: () => void;
}

const ModalOption = ({
  buttons,
  children,
  className,
  onCancel,
}: Props) => (
  <ModalCard className={className}>
    {!onCancel || <CancelIconButton onClick={onCancel} />}
    <P>{children}</P>
    <div>
      {buttons}
    </div>
  </ModalCard>
);

export default ModalOption;
