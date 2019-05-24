import React from 'react';

import styled from '@emotion/styled';
import { format } from 'date-fns';

import Avatar, { AvatarSize } from '../bolts/content/avatar';
import Card from '../bolts/content/card';
import CheckCircleIcon from '../bolts/icons/check-circle';
import CrossCircleIcon from '../bolts/icons/cross-circle';
import SpinnerIcon from '../bolts/icons/spinner';
import H4 from '../bolts/typography/h4';
import Strong from '../bolts/typography/strong';
import ExtraSmall from '../bolts/typography/xsmall';

const Details = styled.div`
  flex: 1 0 0;
  padding: .5rem 1rem;
`;

const Title = styled(H4)`
  margin: 0 0 .3rem;
`;

const AvatarWrapper = styled.div`
  margin: 0 1rem 0 2rem;
`;

const Status = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 60px;
  color: ${({ theme }) => theme.color.select.white};
  border-radius: 0 4px 4px 0;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const StatusPass = styled(Status)`
  background-color: ${({ theme }) => theme.color.select.grass};
`;

const StatusFail = styled(Status)`
  background-color: ${({ theme }) => theme.color.select.brick};
`;

const StatusWaiting = styled(Status)`
  background-color: ${({ theme }) => theme.color.select.greyscale[4]};
`;

const FailLabel = () => (<StatusFail><CrossCircleIcon title="Failed" /></StatusFail>);
const PassLabel = () => (<StatusPass><CheckCircleIcon title="Passed" /></StatusPass>);
const WaitingLabel = () => (<StatusWaiting><SpinnerIcon title="In Progress" /></StatusWaiting>);

export enum InspectionStatus {
  FAIL = 'fail',
  PASS = 'pass',
  WAITING = 'waiting',
}

function renderStatus(status?: InspectionStatus) {
  switch (status) {
    case InspectionStatus.FAIL:
      return <FailLabel />;
    case InspectionStatus.PASS:
      return <PassLabel />;
    default:
    case InspectionStatus.WAITING:
      return <WaitingLabel />;
  }
}

interface Props {
  className?: string;
  date: Date;
  inspectorAvatarSrc?: string;
  inspectorName: string;
  onClick?: () => void;
  partName: string;
  partNumber: string;
  status?: InspectionStatus;
}

const InspectionCard = ({
  className,
  date,
  inspectorAvatarSrc,
  inspectorName,
  onClick,
  partName,
  partNumber,
  status,
}: Props) =>
(
  <Card className={className} onClick={onClick} role="button">
    <Details>
      <Title>#{partNumber} - {partName}</Title>
      <ExtraSmall>{format(date, 'D MMM YYYY [at] h[:]mm a')} | <Strong>{inspectorName}</Strong></ExtraSmall>
    </Details>
    <AvatarWrapper>
      <Avatar
        name={inspectorName}
        size={AvatarSize.SMALL}
        src={inspectorAvatarSrc}
      />
    </AvatarWrapper>
    {renderStatus(status)}
  </Card>
);

export default InspectionCard;
