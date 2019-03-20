import React from 'react';

import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Code from '../../src/bolts/code';
import H1 from '../../src/bolts/h1';
import H2 from '../../src/bolts/h2';
import Input from '../../src/bolts/input';
import { Wrapper } from '../utilities';

const Title = styled(H1)`
  margin-top: 0;
`;

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
    options: { showPanel: true },
  })
  .add('Standard', () => (
    <Wrapper>
      <Title>Input</Title>
      <Input
        onChange={action('change')}
        onFocus={action('focus')}
        onBlur={action('blur')}
        placeholder={text('Placeholder', '')}
        // @ts-ignore
        type={select('Type', options, 'text')}
      />
      <H2>Source Code</H2>
      <Code>
        &lt;Input onChange=&#123;...&#125; /&gt;
      </Code>
    </Wrapper>
  ));
