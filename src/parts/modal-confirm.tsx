import React from 'react';

import styled from '@emotion/styled';

import { ModalCard } from '../bolts/content/card';
import Button, { ButtonSize, ButtonType } from '../bolts/inputs/button';
import P from '../bolts/typography/p';

const ActionButton = styled(Button)`
  margin: 0 .5rem;
`;

interface Props {
  className?: string;
  children?: string;
  labelConfirm: string;
  labelReject: string;
  onConfirm: () => void;
  onReject: () => void;
}

const ModalConfirm = ({
  className,
  children,
  labelConfirm,
  labelReject,
  onConfirm,
  onReject,
}: Props) => (
  <ModalCard className={className}>
    <P>{children}</P>
    <div>
      <ActionButton onClick={onConfirm} size={ButtonSize.SMALL} type={ButtonType.SUCCESS}>
        {labelConfirm}
      </ActionButton>
      <ActionButton onClick={onReject} size={ButtonSize.SMALL} type={ButtonType.DANGER}>
        {labelReject}
      </ActionButton>
    </div>
  </ModalCard>
);

export default ModalConfirm;
