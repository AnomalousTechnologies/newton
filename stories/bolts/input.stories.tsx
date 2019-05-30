import React from 'react';

import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Label from '../../src/bolts/inputs/label';
import Input from '../../src/bolts/inputs/input';
import Textarea from '../../src/bolts/inputs/textarea';

import Code from '../../src/bolts/typography/code';
import H1 from '../../src/bolts/typography/h1';
import H2 from '../../src/bolts/typography/h2';
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

storiesOf('Bolts|Inputs', module)
  .addDecorator(withKnobs)
  .addParameters({
    options: { showPanel: true },
  })
  .add('Text Input', () => (
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
  ))
  .add('Text Area', () => (
    <Wrapper>
      <Title>Textarea</Title>
      <Textarea
        onChange={action('change')}
        onFocus={action('focus')}
        onBlur={action('blur')}
        placeholder={text('Placeholder', '')}
      />
      <H2>Source Code</H2>
      <Code>
        &lt;Textarea onChange=&#123;...&#125; /&gt;
      </Code>
    </Wrapper>
  ))
  .add('Label', () => (
    <Wrapper>
      <Title>Label</Title>
      <Label>{text('Placeholder', 'My Label')}</Label>
      <H2>Source Code</H2>
      <Code>
        &lt;Label&gt;...&lt;/Label&gt;
      </Code>
    </Wrapper>
  ));
