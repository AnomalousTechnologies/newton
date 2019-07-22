import React from 'react';

import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Code from '../../src/bolts/typography/code';
import H1 from '../../src/bolts/typography/h1';
import H2 from '../../src/bolts/typography/h2';
import InputWithLabel from '../../src/parts/input-with-label';
import { Wrapper } from '../utilities';

const Title = styled(H1)`
  margin-top: 0;
`;

const stories = storiesOf('Parts|Input With Label', module)
  .addDecorator(withKnobs)
  .addParameters({ options: { showPanel: true } });

stories.add('Input Small', () => (
  <Wrapper>
    <Title>Input with Label</Title>
    <InputWithLabel
      label={text('Label', 'My Input')}
      name="foo"
      onChange={action('changed')}
      onEnterKeyPress={action('enterKeyPress')}
      onKeyPress={action('keyPress')}
      placeholder={text('Placeholder', 'Enter a value')}
      value={text('Value', 'Hello, friend')}
    />
    <H2>Source Code</H2>
    <Code>
      import &#123; InputWithLabel &#125; from '@anomalous/newton';<br/>
      <br/>
      &lt;InputWithLabel<br/>
        &nbsp;&nbsp;label=&#123;...&#125;<br/>
        &nbsp;&nbsp;name=&#123;...&#125;<br/>
        &nbsp;&nbsp;onChange=&#123;...&#125;<br/>
        &nbsp;&nbsp;value=&#123;...&#125;<br/>
      /&gt;
    </Code>
  </Wrapper>
));

stories.add('Input Large', () => (
  <Wrapper>
    <Title>Input with Label</Title>
    <InputWithLabel
      label={text('Label', 'My Input')}
      name="foo"
      isLarge
      onChange={action('changed')}
      onEnterKeyPress={action('enterKeyPress')}
      onKeyPress={action('keyPress')}
      placeholder={text('Placeholder', 'Enter a value')}
      value={text('Value', 'Hello, friend')}
    />
    <H2>Source Code</H2>
    <Code>
      import &#123; InputWithLabel &#125; from '@anomalous/newton';<br/>
      <br/>
      &lt;InputWithLabel<br/>
        &nbsp;&nbsp;label=&#123;...&#125;<br/>
        &nbsp;&nbsp;isLarge<br/>
        &nbsp;&nbsp;name=&#123;...&#125;<br/>
        &nbsp;&nbsp;onChange=&#123;...&#125;<br/>
        &nbsp;&nbsp;value=&#123;...&#125;<br/>
      /&gt;
    </Code>
  </Wrapper>
));

stories.add('Textarea', () => (
  <Wrapper>
    <Title>Textarea with Label</Title>
    <InputWithLabel
      label={text('Label', 'My Input')}
      name="foo"
      onChange={action('changed')}
      onEnterKeyPress={action('enterKeyPress')}
      onKeyPress={action('keyPress')}
      placeholder={text('Placeholder', 'Enter a value')}
      type="textarea"
      value={text('Value', 'Hello, friend')}
    />
    <H2>Source Code</H2>
    <Code>
      import &#123; InputWithLabel &#125; from '@anomalous/newton';<br/>
      <br/>
      &lt;InputWithLabel<br/>
        &nbsp;&nbsp;label=&#123;...&#125;<br/>
        &nbsp;&nbsp;name=&#123;...&#125;<br/>
        &nbsp;&nbsp;onChange=&#123;...&#125;<br/>
        &nbsp;&nbsp;type="textarea"<br/>
        &nbsp;&nbsp;value=&#123;...&#125;<br/>
      /&gt;
    </Code>
  </Wrapper>
));

stories.add('Input And Caption', () => (
  <Wrapper>
    <Title>Input with Label</Title>
    <InputWithLabel
      caption={text('Caption', 'This field is optional')}
      label={text('Label', 'My Input')}
      name="foo"
      onChange={action('changed')}
      onEnterKeyPress={action('enterKeyPress')}
      onKeyPress={action('keyPress')}
      placeholder={text('Placeholder', 'Enter a value')}
      value={text('Value', 'Hello, friend')}
    />
    <H2>Source Code</H2>
    <Code>
      import &#123; InputWithLabel &#125; from '@anomalous/newton';<br/>
      <br/>
      &lt;InputWithLabel<br/>
        &nbsp;&nbsp;caption=&#123;...&#125;<br/>
        &nbsp;&nbsp;label=&#123;...&#125;<br/>
        &nbsp;&nbsp;name=&#123;...&#125;<br/>
        &nbsp;&nbsp;onChange=&#123;...&#125;<br/>
        &nbsp;&nbsp;value=&#123;...&#125;<br/>
      /&gt;
    </Code>
  </Wrapper>
));

stories.add('Invalid Input', () => (
  <Wrapper>
    <Title>Input with Label</Title>
    <InputWithLabel
      isValid={false}
      label={text('Label', 'My Input')}
      name="foo"
      onChange={action('changed')}
      onEnterKeyPress={action('enterKeyPress')}
      onKeyPress={action('keyPress')}
      placeholder={text('Placeholder', 'Enter a value')}
      value={text('Value', 'Hello, friend')}
    />
    <H2>Source Code</H2>
    <Code>
      import &#123; InputWithLabel &#125; from '@anomalous/newton';<br/>
      <br/>
      &lt;InputWithLabel<br/>
        &nbsp;&nbsp;caption=&#123;...&#125;<br/>
        &nbsp;&nbsp;label=&#123;...&#125;<br/>
        &nbsp;&nbsp;name=&#123;...&#125;<br/>
        &nbsp;&nbsp;onChange=&#123;...&#125;<br/>
        &nbsp;&nbsp;value=&#123;...&#125;<br/>
      /&gt;
    </Code>
  </Wrapper>
));

stories.add('Valid Input', () => (
  <Wrapper>
    <Title>Input with Label</Title>
    <InputWithLabel
      isValid={true}
      label={text('Label', 'My Input')}
      name="foo"
      onChange={action('changed')}
      onEnterKeyPress={action('enterKeyPress')}
      onKeyPress={action('keyPress')}
      placeholder={text('Placeholder', 'Enter a value')}
      value={text('Value', 'Hello, friend')}
    />
    <H2>Source Code</H2>
    <Code>
      import &#123; InputWithLabel &#125; from '@anomalous/newton';<br/>
      <br/>
      &lt;InputWithLabel<br/>
        &nbsp;&nbsp;caption=&#123;...&#125;<br/>
        &nbsp;&nbsp;label=&#123;...&#125;<br/>
        &nbsp;&nbsp;name=&#123;...&#125;<br/>
        &nbsp;&nbsp;onChange=&#123;...&#125;<br/>
        &nbsp;&nbsp;value=&#123;...&#125;<br/>
      /&gt;
    </Code>
  </Wrapper>
));
