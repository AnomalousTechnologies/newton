import React from 'react';

import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import InputWithLabel from '../../src/parts/input-with-label';

const stories = storiesOf('Parts|Input With Label', module)
  .addDecorator(withKnobs)
  .addParameters({ options: { showPanel: true } });

stories.add('Input', () => (
  <InputWithLabel
    label={text('Label', 'My Input')}
    name="foo"
    onChange={action('changed')}
    placeholder={text('Placeholder', 'Enter a value')}
    value={text('Value', 'Hello, friend')}
  />
));

stories.add('Textarea', () => (
  <InputWithLabel
    label={text('Label', 'My Input')}
    name="foo"
    onChange={action('changed')}
    placeholder={text('Placeholder', 'Enter a value')}
    type="textarea"
    value={text('Value', 'Hello, friend')}
  />
));
