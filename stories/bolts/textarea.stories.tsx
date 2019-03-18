import React from 'react';

import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Textarea from '../../src/bolts/textarea';

storiesOf('Bolts|Textarea', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { disable: true },
    options: { showPanel: true },
  })
  .add('Standard', () => (
    <Textarea
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
      placeholder={text('Placeholder', '')}
    />
  ));
