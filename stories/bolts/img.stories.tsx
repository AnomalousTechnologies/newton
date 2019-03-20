import React from 'react';

import styled from '@emotion/styled';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Code from '../../src/bolts/code';
import H1 from '../../src/bolts/h1';
import H2 from '../../src/bolts/h2';
import Img from '../../src/bolts/img';
import { Wrapper } from '../utilities';

const Title = styled(H1)`
  margin-top: 0;
`;

storiesOf('Bolts|Image', module)
  .addDecorator(withKnobs)
  .addParameters({
    options: { showPanel: true },
  }).add('Standard', () => (
    <Wrapper>
      <Title>Image</Title>
      <Img src={text('Source', 'https://randomuser.me/api/portraits/women/63.jpg')} />
      <H2>Source Code</H2>
      <Code>
        &lt;Img src=&#123;...&#125; /&gt;
      </Code>
    </Wrapper>
  ));
