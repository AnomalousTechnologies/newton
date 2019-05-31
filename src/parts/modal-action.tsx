import React from 'react';

import { ModalCard } from '../bolts/content/card';
import Button, { ButtonSize } from '../bolts/inputs/button';
import P from '../bolts/typography/p';

interface Props {
  className?: string;
  children?: string;
  label: string;
  onAction: () => void;
}

const ModalAction = ({ className, children, label, onAction }: Props) => (
  <ModalCard className={className}>
    <P>{children}</P>
    <Button onClick={onAction} size={ButtonSize.SMALL}>
      {label}
    </Button>
  </ModalCard>
);

export default ModalAction;
