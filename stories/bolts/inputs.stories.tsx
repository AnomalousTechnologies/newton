import React from 'react';

import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import InputLarge from '../../src/bolts/inputs/input-large';
import InputSmall from '../../src/bolts/inputs/input-small';
import Label from '../../src/bolts/inputs/label';
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
  .add('Input Small', () => (
    <Wrapper>
      <Title>Input Small</Title>
      <InputSmall
        onChange={action('change')}
        onFocus={action('focus')}
        onBlur={action('blur')}
        placeholder={text('Placeholder', 'Input placeholder')}
        // @ts-ignore
        type={select('Type', options, 'text')}
      />
      <H2>Source Code</H2>
      <Code>
        import &#123; InputSmall &#125; from '@anomalous/newton';<br/>
        <br/>
        &lt;InputSmall onChange=&#123;...&#125; /&gt;
      </Code>
    </Wrapper>
  ))
  .add('Input Large', () => (
    <Wrapper>
      <Title>Input Large</Title>
      <InputLarge
        onChange={action('change')}
        onFocus={action('focus')}
        onBlur={action('blur')}
        placeholder={text('Placeholder', 'Input placeholder')}
        // @ts-ignore
        type={select('Type', options, 'text')}
      />
      <H2>Source Code</H2>
      <Code>
        import &#123; InputLarge &#125; from '@anomalous/newton';<br/>
        <br/>
        &lt;InputLarge onChange=&#123;...&#125; /&gt;
      </Code>
    </Wrapper>
  ))
  .add('Textarea', () => (
    <Wrapper>
      <Title>Textarea</Title>
      <Textarea
        onChange={action('change')}
        onFocus={action('focus')}
        onBlur={action('blur')}
        placeholder={text('Placeholder', 'Textarea placeholder')}
      />
      <H2>Source Code</H2>
      <Code>
        import &#123; Textarea &#125; from '@anomalous/newton';<br/>
        <br/>
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
        import &#123; Label &#125; from '@anomalous/newton';<br/>
        <br/>
        &lt;Label&gt;...&lt;/Label&gt;
      </Code>
    </Wrapper>
  ));
