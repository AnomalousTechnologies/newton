import React from 'react';

import styled from '@emotion/styled';
import { storiesOf } from '@storybook/react';

import Badge, { BadgeType } from '../../src/bolts/content/badge';
import CheckBadge from '../../src/bolts/icons/check-badge';
import CrossBadge from '../../src/bolts/icons/cross-badge';
import QuestionBadge from '../../src/bolts/icons/question-badge';
import Code from '../../src/bolts/typography/code';
import H1 from '../../src/bolts/typography/h1';
import H2 from '../../src/bolts/typography/h2';
import { Wrapper } from '../utilities';

const Title = styled(H1)`
  margin-top: 0;
`;

storiesOf('Bolts|Badge', module)
  .addParameters({
    options: { showPanel: false },
  })
  .add('Primary', () => (
    <Wrapper>
      <Title>Badge</Title>
      <Badge icon={<QuestionBadge />} />
      <H2>Source Code</H2>
      <Code>
        &lt;Badge icon=&#123;...&#125; type=&#123;...&#125;&gt;...&lt;/Badge&gt;
      </Code>
    </Wrapper>
  ))
  .add('Success', () => (
    <Wrapper>
      <Title>Badge</Title>
      <Badge icon={<CheckBadge />} type={BadgeType.SUCCESS} />
      <H2>Source Code</H2>
      <Code>
        &lt;Badge icon=&#123;...&#125; type=&#123;...&#125;&gt;...&lt;/Badge&gt;
      </Code>
    </Wrapper>
  ))
  .add('Danger', () => (
    <Wrapper>
      <Title>Badge</Title>
      <Badge icon={<CrossBadge />} type={BadgeType.DANGER} />
      <H2>Source Code</H2>
      <Code>
        &lt;Badge icon=&#123;...&#125; type=&#123;...&#125;&gt;...&lt;/Badge&gt;
      </Code>
    </Wrapper>
  ));
