import React from 'react';

import { format } from 'date-fns';
import styled, { keyframes } from 'styled-components';

import Avatar, { AvatarSize } from '../bolts/content/avatar';
import Badge, { BadgeType } from '../bolts/content/badge';
import Card from '../bolts/content/card';
import CheckBadgeIcon from '../bolts/icons/check-badge';
import CheckCircleIcon from '../bolts/icons/check-circle';
import CrossBadgeIcon from '../bolts/icons/cross-badge';
import CrossCircleIcon from '../bolts/icons/cross-circle';
import QuestionCircleIcon from '../bolts/icons/question-circle';
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

const PartName = styled.span``;

const PartNumber = styled.span``;

const PartSerial = styled.span``;

const AvatarWrapper = styled.div`
  margin: 0 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

const VerificationBadge = styled(Badge)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
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

const StatusUnsure = styled(Status)`
  background-color: ${({ theme }) => theme.color.select.lemon};
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpiningIcon = styled(SpinnerIcon)`
  animation: ${rotate} 5s linear infinite;
`;

const FailLabel = () => (<StatusFail><CrossCircleIcon title="Failed" /></StatusFail>);
const PassLabel = () => (<StatusPass><CheckCircleIcon title="Passed" /></StatusPass>);
const WaitingLabel = () => (<StatusWaiting><SpiningIcon title="In Progress" /></StatusWaiting>);
const UnsureLabel = () => (<StatusUnsure><QuestionCircleIcon title="Unsure" /></StatusUnsure>);

export enum InspectionVerification {
  REJECTED = -1,
  UNVERIFIED = 0,
  VERIFIED = 1,
}

export enum InspectionStatus {
  FAIL = 'fail',
  PASS = 'pass',
  WAITING = 'waiting',
  UNSURE = 'unsure',
}

function renderStatus(status?: InspectionStatus) {
  switch (status) {
    case InspectionStatus.FAIL:
      return <FailLabel />;
    case InspectionStatus.PASS:
      return <PassLabel />;
    case InspectionStatus.UNSURE:
      return <UnsureLabel />;
    default:
    case InspectionStatus.WAITING:
      return <WaitingLabel />;
  }
}

function getVerificationBadge(verification?: InspectionVerification) {
  if (!verification) { return; }
  switch (verification) {
    case InspectionVerification.VERIFIED:
      return <VerificationBadge icon={<CheckBadgeIcon title="Verified" />} type={BadgeType.SUCCESS} />;
    case InspectionVerification.REJECTED:
      return <VerificationBadge icon={<CrossBadgeIcon title="Rejected" />} type={BadgeType.DANGER} />;

  }
}

function getTitle(partName?: string, partNumber?: string, partSerial?: string) {
  let name = partName;
  if (!(partName || partSerial || partNumber)) {
    name = 'No Part Attached';
  }
  if (!partName && partSerial) {
    name = `Serial. ${partSerial}`;
    partSerial = undefined;
  }
  if (partName && partSerial) {
    partNumber = undefined;
  }
  return (
    <>
      <PartName>{name || 'Generic Part'}</PartName>
      {!partSerial || <PartSerial> | Serial. {partSerial}</PartSerial>}
      {!partNumber || <PartNumber> | Part. {partNumber}</PartNumber>}
    </>
  );
}

interface Props {
  className?: string;
  date: Date;
  inspectorAvatarSrc?: string;
  inspectorName: string;
  isActive?: boolean;
  onClick?: () => void;
  partName?: string;
  partNumber?: string;
  partSerial?: string;
  status?: InspectionStatus;
  style?: object;
  verification?: InspectionVerification;
}

const InspectionCard = ({
  className,
  date,
  inspectorAvatarSrc,
  inspectorName,
  isActive,
  onClick,
  partName,
  partNumber,
  partSerial,
  status,
  style,
  verification,
}: Props) =>
(
  <Card className={className} isActive={isActive} onClick={onClick} role="button" style={style}>
    <Details>
      <Title>
        {getTitle(partName, partNumber, partSerial)}
      </Title>
      <ExtraSmall>
        {format(date, 'D MMM YYYY [at] h[:]mm a')} | <Strong>{inspectorName}</Strong>
      </ExtraSmall>
    </Details>
    {getVerificationBadge(verification)}
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

InspectionCard.defaultProps = {
  status: InspectionStatus.WAITING,
};

export default InspectionCard;
