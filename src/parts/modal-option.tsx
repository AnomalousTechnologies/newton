import React from 'react';

import { ModalCard } from '../bolts/content/card';
import P from '../bolts/typography/p';

interface Props {
  className?: string;
  children?: string;
  buttons: React.ReactNode;
}

const ModalConfirm = ({
  className,
  children,
  buttons,
}: Props) => (
  <ModalCard className={className}>
    <P>{children}</P>
    <div>
      {buttons}
    </div>
  </ModalCard>
);

export default ModalConfirm;
