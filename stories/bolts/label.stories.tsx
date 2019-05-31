import React from 'react';

import styled from '@emotion/styled';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Label, { LabelSize, LabelType } from '../../src/bolts/content/label';
import Code from '../../src/bolts/typography/code';
import H1 from '../../src/bolts/typography/h1';
import H2 from '../../src/bolts/typography/h2';
import { Wrapper } from '../utilities';

const Title = styled(H1)`
  margin-top: 0;
`;

storiesOf('Bolts|Label', module)
  .addDecorator(withKnobs)
  .addParameters({
    options: { showPanel: true },
  })
  .add('Large', () => (
    <Wrapper>
      <Title>Label</Title>
      <Label size={LabelSize.LARGE}>
        {text('Placeholder', 'Large Label')}
      </Label>
      <H2>Source Code</H2>
      <Code>
        import &#123; Label, LabelSize &#125; from '@anomalous/newton';<br/>
        <br/>
        &lt;Label size=&#123;...&#125;&gt;...&lt;/Label&gt;
      </Code>
    </Wrapper>
  ))
  .add('Small', () => (
    <Wrapper>
      <Title>Label</Title>
      <Label size={LabelSize.SMALL}>
        {text('Placeholder', 'Small Label')}
      </Label>
      <H2>Source Code</H2>
      <Code>
        import &#123; Label, LabelSize &#125; from '@anomalous/newton';<br/>
        <br/>
        &lt;Label size=&#123;...&#125;&gt;...&lt;/Label&gt;
      </Code>
    </Wrapper>
  ))
  .add('Primary', () => (
    <Wrapper>
      <Title>Label</Title>
      <Label>
        {text('Placeholder', 'My Label')}
      </Label>
      <H2>Source Code</H2>
      <Code>
        import &#123; Label &#125; from '@anomalous/newton';<br/>
        <br/>
        &lt;Label onClick=&#123;...&#125;&gt;...&lt;/Label&gt;
      </Code>
    </Wrapper>
  ))
  .add('Secondary', () => (
    <Wrapper>
      <Title>Label</Title>
      <Label type={LabelType.SECONDARY}>
        {text('Placeholder', 'My Label')}
      </Label>
      <H2>Source Code</H2>
      <Code>
        import &#123; Label, LabelType &#125; from '@anomalous/newton';<br/>
        <br/>
        &lt;Label type=&#123;...&#125;&gt;...&lt;/Label&gt;
      </Code>
    </Wrapper>
  ))
  .add('Success', () => (
    <Wrapper>
      <Title>Label</Title>
      <Label type={LabelType.SUCCESS}>
        {text('Placeholder', 'My Label')}
      </Label>
      <H2>Source Code</H2>
      <Code>
        import &#123; Label, LabelType &#125; from '@anomalous/newton';<br/>
        <br/>
        &lt;Label type=&#123;...&#125;&gt;...&lt;/Label&gt;
      </Code>
    </Wrapper>
  ))
  .add('Warning', () => (
    <Wrapper>
      <Title>Label</Title>
      <Label type={LabelType.WARNING}>
        {text('Placeholder', 'My Label')}
      </Label>
      <H2>Source Code</H2>
      <Code>
        import &#123; Label, LabelType &#125; from '@anomalous/newton';<br/>
        <br/>
        &lt;Label type=&#123;...&#125;&gt;...&lt;/Label&gt;
      </Code>
    </Wrapper>
  ))
  .add('Danger', () => (
    <Wrapper>
      <Title>Label</Title>
      <Label type={LabelType.DANGER}>
        {text('Placeholder', 'My Label')}
      </Label>
      <H2>Source Code</H2>
      <Code>
        import &#123; Label, LabelType &#125; from '@anomalous/newton';<br/>
        <br/>
        &lt;Label type=&#123;...&#125;&gt;...&lt;/Label&gt;
      </Code>
    </Wrapper>
  ));
