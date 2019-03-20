import React from 'react';

import styled from '@emotion/styled';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Code from '../../src/bolts/code';
import H1 from '../../src/bolts/h1';
import H2 from '../../src/bolts/h2';
import Label from '../../src/bolts/label';
import { Wrapper } from '../utilities';

const Title = styled(H1)`
  margin-top: 0;
`;

storiesOf('Bolts|Label', module)
  .addDecorator(withKnobs)
  .addParameters({
    options: { showPanel: true },
  })
  .add('Standard', () => (
    <Wrapper>
      <Title>Label</Title>
      <Label>{text('Placeholder', 'My Label')}</Label>
      <H2>Source Code</H2>
      <Code>
        &lt;Label&gt;...&lt;/Label&gt;
      </Code>
    </Wrapper>
  ));
