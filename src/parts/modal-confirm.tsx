import React from 'react';

import styled from 'styled-components';

import { ModalCard } from '../bolts/content/card';
import Button, { ButtonSize, ButtonType, CancelIconButton } from '../bolts/inputs/button';
import P from '../bolts/typography/p';

const ActionButton = styled(Button)`
  margin: 0 .5rem;
`;

interface Props {
  className?: string;
  children?: string;
  labelConfirm: string;
  labelReject: string;
  onCancel?: () => void;
  onConfirm: (event?: React.MouseEvent) => void;
  onReject: (event?: React.MouseEvent) => void;
}

const ModalConfirm = ({
  className,
  children,
  labelConfirm,
  labelReject,
  onCancel,
  onConfirm,
  onReject,
}: Props) => (
  <ModalCard className={className}>
    {!onCancel || <CancelIconButton onClick={onCancel} />}
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
