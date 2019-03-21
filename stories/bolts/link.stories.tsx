import React from 'react';

import styled from '@emotion/styled';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { StaticRouter } from 'react-router-dom';

import Code from '../../src/bolts/code';
import H1 from '../../src/bolts/h1';
import H2 from '../../src/bolts/h2';
import Link from '../../src/bolts/link';
import LinkRoute from '../../src/bolts/link-route';
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
    <P>NB: if you are using React Router you can use &lt;LinkRoute /&gt; to use the React Route DOM link component.</P>
  </Wrapper>
));

stories.add('React Router', () => (
  <Wrapper>
    <Title>React Router Link</Title>
    <StaticRouter>
      <P>
        This sentence has <LinkRoute to="/">{text('Content', 'a React Router link')}</LinkRoute> placed within it.
      </P>
    </StaticRouter>
    <H2>Source Code</H2>
    <Code>
      &lt;LinkRoute href=&#123;...&#125;&gt;...&lt;/LinkRoute&gt;
    </Code>
  </Wrapper>
));
