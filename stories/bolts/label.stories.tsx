import React from 'react';

import styled from '@emotion/styled';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Label from '../../src/bolts/inputs/label';
import Code from '../../src/bolts/typography/code';
import H1 from '../../src/bolts/typography/h1';
import H2 from '../../src/bolts/typography/h2';
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
