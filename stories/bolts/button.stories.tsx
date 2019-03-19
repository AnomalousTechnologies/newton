import React from 'react';

import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Button from '../../src/bolts/button';
import { Wrapper } from '../utilities';

storiesOf('Bolts|Button', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { disable: true },
    options: { showPanel: true },
  })
  .add('Primary', () => (
    <Wrapper>
      <Button onClick={action('clicked')}>{text('Placeholder', 'My Button')}</Button>
    </Wrapper>
  ));
