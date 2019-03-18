import React from 'react';

import { action } from '@storybook/addon-actions';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Input from '../../src/bolts/input';

const options = {
  Date: 'date',
  DatetimeLocal: 'datetime-local',
  Email: 'email',
  File: 'file',
  Hidden: 'hidden',
  Month: 'month',
  Number: 'number',
  Password: 'password',
  Search: 'search',
  Tel: 'tel',
  Text: 'text',
  Time: 'time',
  Url: 'url',
  Week: 'week',
};

storiesOf('Bolts|Input', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { disable: true },
    options: { showPanel: true },
  })
  .add('Standard', () => (
    <Input
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
      placeholder={text('Placeholder', '')}
      // @ts-ignore
      type={select('Type', options, 'text')}
    />
  ));
