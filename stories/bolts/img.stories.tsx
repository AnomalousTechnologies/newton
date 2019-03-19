import React from 'react';

import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Img from '../../src/bolts/img';
import { Wrapper } from '../utilities';

storiesOf('Bolts|Image', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { disable: true },
    options: { showPanel: true },
  }).add('Standard', () => (
    <Wrapper>
      <Img src={text('Source', 'https://randomuser.me/api/portraits/women/63.jpg')} />
    </Wrapper>
  ));
