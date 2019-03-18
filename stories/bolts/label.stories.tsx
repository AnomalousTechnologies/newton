import React from 'react';

import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Label from '../../src/bolts/label';

storiesOf('Bolts|Label', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { disable: true },
    options: { showPanel: true },
  })
  .add('Standard', () => <Label>{text('Placeholder', 'My Label')}</Label>);
