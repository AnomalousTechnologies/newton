import React from 'react';

import styled from '@emotion/styled';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Img from '../../src/bolts/content/img';
import Code from '../../src/bolts/typography/code';
import H1 from '../../src/bolts/typography/h1';
import H2 from '../../src/bolts/typography/h2';
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
        import &#123; Img &#125; from '@anomalous/newton';<br/>
        <br/>
        &lt;Img src=&#123;...&#125; /&gt;
      </Code>
    </Wrapper>
  ));
