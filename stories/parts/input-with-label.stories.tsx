import React from 'react';

import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import InputWithLabel from '../../src/parts/input-with-label';
import { Wrapper } from '../utilities';

const stories = storiesOf('Parts|Input With Label', module)
  .addDecorator(withKnobs)
  .addParameters({ options: { showPanel: true } });

stories.add('Input', () => (
  <Wrapper>
    <InputWithLabel
      label={text('Label', 'My Input')}
      name="foo"
      onChange={action('changed')}
      placeholder={text('Placeholder', 'Enter a value')}
      value={text('Value', 'Hello, friend')}
    />
  </Wrapper>
));

stories.add('Textarea', () => (
  <Wrapper>
    <InputWithLabel
      label={text('Label', 'My Input')}
      name="foo"
      onChange={action('changed')}
      placeholder={text('Placeholder', 'Enter a value')}
      type="textarea"
      value={text('Value', 'Hello, friend')}
    />
  </Wrapper>
));
