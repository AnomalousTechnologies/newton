import React from 'react';

import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';
import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Code from '../../src/bolts/typography/code';
import H1 from '../../src/bolts/typography/h1';
import H2 from '../../src/bolts/typography/h2';
import InspectionCard, { InspectionStatus, InspectionVerification } from '../../src/parts/inspection-card';
import { Wrapper } from '../utilities';

const Title = styled(H1)`
  margin-top: 0;
`;

const DemoCard = styled(InspectionCard)`
  max-width: 500px;
`;

const stories = storiesOf('Parts|Inspection Card', module)
  .addDecorator(withKnobs)
  .addParameters({ options: { showPanel: true } });

stories.add('Waiting', () => (
  <Wrapper>
    <Title>Inspection Card</Title>
    <DemoCard
      date={new Date()}
      inspectorAvatarSrc="https://randomuser.me/api/portraits/women/64.jpg"
      inspectorName="Stephanie Lawrence"
      onClick={action('clicked')}
      partName="Rotor Blade"
      partNumber="95678230"
      status={select(
        'Status',
        [InspectionStatus.FAIL, InspectionStatus.PASS, InspectionStatus.WAITING],
        InspectionStatus.WAITING,
      )}
    />
    <H2>Source Code</H2>
    <Code>
      &lt;InspectionCard<br/>
      &nbsp;&nbsp;date=&#123;...&#125;<br/>
      &nbsp;&nbsp;inspectorAvatarSrc=&#123;...&#125;<br/>
      &nbsp;&nbsp;inspectorName=&#123;...&#125;<br/>
      &nbsp;&nbsp;onClick=&#123;...&#125;<br/>
      &nbsp;&nbsp;partName=&#123;...&#125;<br/>
      &nbsp;&nbsp;partNumber=&#123;...&#125;<br/>
      /&gt;
    </Code>
  </Wrapper>
))
.add('Fail', () => (
  <Wrapper>
    <Title>Inspection Card</Title>
    <DemoCard
      date={new Date()}
      inspectorAvatarSrc="https://randomuser.me/api/portraits/women/64.jpg"
      inspectorName="Stephanie Lawrence"
      onClick={action('clicked')}
      partName="Rotor Blade"
      partNumber="95678230"
      status={select(
        'Status',
        [InspectionStatus.FAIL, InspectionStatus.PASS, InspectionStatus.WAITING],
        InspectionStatus.FAIL,
      )}
    />
    <H2>Source Code</H2>
    <Code>
      &lt;InspectionCard<br/>
      &nbsp;&nbsp;date=&#123;...&#125;<br/>
      &nbsp;&nbsp;inspectorAvatarSrc=&#123;...&#125;<br/>
      &nbsp;&nbsp;inspectorName=&#123;...&#125;<br/>
      &nbsp;&nbsp;onClick=&#123;...&#125;<br/>
      &nbsp;&nbsp;partName=&#123;...&#125;<br/>
      &nbsp;&nbsp;partNumber=&#123;...&#125;<br/>
      /&gt;
    </Code>
  </Wrapper>
))
.add('Pass', () => (
  <Wrapper>
    <Title>Inspection Card</Title>
    <DemoCard
      date={new Date()}
      inspectorAvatarSrc="https://randomuser.me/api/portraits/women/64.jpg"
      inspectorName="Stephanie Lawrence"
      onClick={action('clicked')}
      partName="Rotor Blade"
      partNumber="95678230"
      status={select(
        'Status',
        [InspectionStatus.FAIL, InspectionStatus.PASS, InspectionStatus.WAITING],
        InspectionStatus.PASS,
      )}
    />
    <H2>Source Code</H2>
    <Code>
      &lt;InspectionCard<br/>
      &nbsp;&nbsp;date=&#123;...&#125;<br/>
      &nbsp;&nbsp;inspectorAvatarSrc=&#123;...&#125;<br/>
      &nbsp;&nbsp;inspectorName=&#123;...&#125;<br/>
      &nbsp;&nbsp;onClick=&#123;...&#125;<br/>
      &nbsp;&nbsp;partName=&#123;...&#125;<br/>
      &nbsp;&nbsp;partNumber=&#123;...&#125;<br/>
      /&gt;
    </Code>
  </Wrapper>
))
.add('Verified', () => (
  <Wrapper>
    <Title>Inspection Card</Title>
    <DemoCard
      date={new Date()}
      inspectorAvatarSrc="https://randomuser.me/api/portraits/women/64.jpg"
      inspectorName="Stephanie Lawrence"
      onClick={action('clicked')}
      partName="Rotor Blade"
      partNumber="95678230"
      status={select(
        'Status',
        [InspectionStatus.FAIL, InspectionStatus.PASS, InspectionStatus.WAITING],
        InspectionStatus.PASS,
      )}
      verification={InspectionVerification.VERIFIED}
    />
    <H2>Source Code</H2>
    <Code>
      &lt;InspectionCard<br/>
      &nbsp;&nbsp;date=&#123;...&#125;<br/>
      &nbsp;&nbsp;inspectorAvatarSrc=&#123;...&#125;<br/>
      &nbsp;&nbsp;inspectorName=&#123;...&#125;<br/>
      &nbsp;&nbsp;onClick=&#123;...&#125;<br/>
      &nbsp;&nbsp;partName=&#123;...&#125;<br/>
      &nbsp;&nbsp;partNumber=&#123;...&#125;<br/>
      /&gt;
    </Code>
  </Wrapper>
))
.add('Rejected', () => (
  <Wrapper>
    <Title>Inspection Card</Title>
    <DemoCard
      date={new Date()}
      inspectorAvatarSrc="https://randomuser.me/api/portraits/women/64.jpg"
      inspectorName="Stephanie Lawrence"
      onClick={action('clicked')}
      partName="Rotor Blade"
      partNumber="95678230"
      status={select(
        'Status',
        [InspectionStatus.FAIL, InspectionStatus.PASS, InspectionStatus.WAITING],
        InspectionStatus.PASS,
      )}
      verification={InspectionVerification.REJECTED}
    />
    <H2>Source Code</H2>
    <Code>
      &lt;InspectionCard<br/>
      &nbsp;&nbsp;date=&#123;...&#125;<br/>
      &nbsp;&nbsp;inspectorAvatarSrc=&#123;...&#125;<br/>
      &nbsp;&nbsp;inspectorName=&#123;...&#125;<br/>
      &nbsp;&nbsp;onClick=&#123;...&#125;<br/>
      &nbsp;&nbsp;partName=&#123;...&#125;<br/>
      &nbsp;&nbsp;partNumber=&#123;...&#125;<br/>
      /&gt;
    </Code>
  </Wrapper>
));
