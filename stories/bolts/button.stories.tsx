import React from 'react';

import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Button from '../../src/bolts/button';
import Code from '../../src/bolts/code';
import H1 from '../../src/bolts/h1';
import H2 from '../../src/bolts/h2';
import { Wrapper } from '../utilities';

const Title = styled(H1)`
  margin-top: 0;
`;

storiesOf('Bolts|Button', module)
  .addDecorator(withKnobs)
  .addParameters({
    options: { showPanel: true },
  })
  .add('Primary', () => (
    <Wrapper>
      <Title>Button</Title>
      <Button onClick={action('clicked')}>{text('Placeholder', 'My Button')}</Button>
      <H2>Source Code</H2>
      <Code>
        &lt;Button onClick=&#123;...&#125;&gt;...&lt;/Button&gt;
      </Code>
    </Wrapper>
  ));
