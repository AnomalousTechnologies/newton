import React from 'react';

import styled from '@emotion/styled';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Card from '../../src/bolts/content/card';
import Code from '../../src/bolts/typography/code';
import H1 from '../../src/bolts/typography/h1';
import H2 from '../../src/bolts/typography/h2';
import P from '../../src/bolts/typography/p';
import { Wrapper } from '../utilities';

const Title = styled(H1)`
  margin-top: 0;
`;

const DemoCard = styled(Card)`
  max-width: 300px;
`;

const Padding = styled.div`
  padding: 1rem;
`;

storiesOf('Bolts|Card', module)
  .addDecorator(withKnobs)
  .addParameters({
    options: { showPanel: true },
  })
  .add('Standard', () => (
    <Wrapper>
      <Title>Base Card</Title>
      <DemoCard>
        <Padding>
          <P>{text('Placeholder', 'Example Card')}</P>
        </Padding>
      </DemoCard>
      <H2>Source Code</H2>
      <Code>
        import &#123; Card &#125; from '@anomalous/newton';<br/>
        <br/>
        &lt;Card&gt;...&lt;/Card&gt;
      </Code>
    </Wrapper>
  ));
