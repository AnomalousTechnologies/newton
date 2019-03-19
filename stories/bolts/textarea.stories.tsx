import React from 'react';

import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Textarea from '../../src/bolts/textarea';
import { Wrapper } from '../utilities';

storiesOf('Bolts|Textarea', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { disable: true },
    options: { showPanel: true },
  })
  .add('Standard', () => (
    <Wrapper>
      <Textarea
        onChange={action('change')}
        onFocus={action('focus')}
        onBlur={action('blur')}
        placeholder={text('Placeholder', '')}
      />
    </Wrapper>
  ));
