import React from 'react';

import styled from '@emotion/styled';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Code from '../../src/bolts/code';
import H1 from '../../src/bolts/h1';
import H2 from '../../src/bolts/h2';
import Link from '../../src/bolts/link';
import P from '../../src/bolts/p';
import { Wrapper } from '../utilities';

const Title = styled(H1)`
  margin-top: 0;
`;

const stories = storiesOf('Bolts|Link', module)
  .addDecorator(withKnobs)
  .addParameters({
    options: { showPanel: true },
  });

stories.add('Link', () => (
  <Wrapper>
    <Title>Link</Title>
    <P>This sentence has <Link>{text('Content', 'an example of a link')}</Link> placed within it.</P>
    <H2>Source Code</H2>
    <Code>
      &lt;Link href=&#123;...&#125;&gt;...&lt;/Link&gt;
    </Code>
  </Wrapper>
));
