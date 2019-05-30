import React from 'react';

import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import CornerCap, { CornerCapVerification } from '../../src/bolts/content/corner-cap';
import Code from '../../src/bolts/typography/code';
import H1 from '../../src/bolts/typography/h1';
import H2 from '../../src/bolts/typography/h2';
import { Wrapper } from '../utilities';

const Title = styled(H1)`
  margin-top: 0;
`;

storiesOf('Bolts|CornerCap', module)
  .addParameters({
    options: { showPanel: false },
  })
  .add('Unverified', () => (
    <Wrapper>
      <Title>CornerCap Unverified</Title>
      <CornerCap onClick={action('clicked')} />
      <H2>Source Code</H2>
      <Code>
        &lt;CornerCap /&gt;
      </Code>
    </Wrapper>
  ))
  .add('Verified', () => (
    <Wrapper>
      <Title>CornerCap Verified</Title>
      <CornerCap onClick={action('clicked')} verification={CornerCapVerification.VERIFIED} />
      <H2>Source Code</H2>
      <Code>
        &lt;CornerCap verification=&#123;...&#125; /&gt;
      </Code>
    </Wrapper>
  ))
  .add('Rejected', () => (
    <Wrapper>
      <Title>CornerCap Rejected</Title>
      <CornerCap onClick={action('clicked')} verification={CornerCapVerification.REJECTED} />
      <H2>Source Code</H2>
      <Code>
        &lt;CornerCap verification=&#123;...&#125; /&gt;
      </Code>
    </Wrapper>
  ));
