import React from 'react';

import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import UserIcon from '../../src/bolts/icons/user';
import Button, { ButtonSize, ButtonType } from '../../src/bolts/inputs/button';
import Code from '../../src/bolts/typography/code';
import H1 from '../../src/bolts/typography/h1';
import H2 from '../../src/bolts/typography/h2';
import { Wrapper } from '../utilities';

const Title = styled(H1)`
  margin-top: 0;
`;

storiesOf('Bolts|Button', module)
  .addDecorator(withKnobs)
  .addParameters({
    options: { showPanel: true },
  })
  .add('Large', () => (
    <Wrapper>
      <Title>Button</Title>
      <Button onClick={action('clicked')} size={ButtonSize.LARGE}>
        {text('Placeholder', 'Large Button')}
      </Button>
      <H2>Source Code</H2>
      <Code>
        &lt;Button onClick=&#123;...&#125; size=&#123;...&#125;&gt;...&lt;/Button&gt;
      </Code>
    </Wrapper>
  ))
  .add('Small', () => (
    <Wrapper>
      <Title>Button</Title>
      <Button onClick={action('clicked')} size={ButtonSize.SMALL}>
        {text('Placeholder', 'Small Button')}
      </Button>
      <H2>Source Code</H2>
      <Code>
        &lt;Button onClick=&#123;...&#125; size=&#123;...&#125;&gt;...&lt;/Button&gt;
      </Code>
    </Wrapper>
  ))
  .add('Icon', () => (
    <Wrapper>
      <Title>Button</Title>
      <Button
        icon={<UserIcon />}
        onClick={action('clicked')}
        size={select('Size', [ButtonSize.SMALL, ButtonSize.LARGE], ButtonSize.SMALL)}
      >
        {text('Placeholder', 'Icon Button')}
      </Button>
      <H2>Source Code</H2>
      <Code>
        &lt;Button icon=&#123;...&#125; onClick=&#123;...&#125;&gt;...&lt;/Button&gt;
      </Code>
    </Wrapper>
  ))
  .add('Primary', () => (
    <Wrapper>
      <Title>Button</Title>
      <Button onClick={action('clicked')}>
        {text('Placeholder', 'My Button')}
      </Button>
      <H2>Source Code</H2>
      <Code>
        &lt;Button onClick=&#123;...&#125;&gt;...&lt;/Button&gt;
      </Code>
    </Wrapper>
  ))
  .add('Secondary', () => (
    <Wrapper>
      <Title>Button</Title>
      <Button onClick={action('clicked')} type={ButtonType.SECONDARY}>
        {text('Placeholder', 'My Button')}
      </Button>
      <H2>Source Code</H2>
      <Code>
        &lt;Button onClick=&#123;...&#125; type=&#123;...&#125;&gt;...&lt;/Button&gt;
      </Code>
    </Wrapper>
  ))
  .add('Success', () => (
    <Wrapper>
      <Title>Button</Title>
      <Button onClick={action('clicked')} type={ButtonType.SUCCESS}>
        {text('Placeholder', 'My Button')}
      </Button>
      <H2>Source Code</H2>
      <Code>
        &lt;Button onClick=&#123;...&#125; type=&#123;...&#125;&gt;...&lt;/Button&gt;
      </Code>
    </Wrapper>
  ))
  .add('Warning', () => (
    <Wrapper>
      <Title>Button</Title>
      <Button onClick={action('clicked')} type={ButtonType.WARNING}>
        {text('Placeholder', 'My Button')}
      </Button>
      <H2>Source Code</H2>
      <Code>
        &lt;Button onClick=&#123;...&#125; type=&#123;...&#125;&gt;...&lt;/Button&gt;
      </Code>
    </Wrapper>
  ))
  .add('Danger', () => (
    <Wrapper>
      <Title>Button</Title>
      <Button onClick={action('clicked')} type={ButtonType.DANGER}>
        {text('Placeholder', 'My Button')}
      </Button>
      <H2>Source Code</H2>
      <Code>
        &lt;Button onClick=&#123;...&#125; type=&#123;...&#125;&gt;...&lt;/Button&gt;
      </Code>
    </Wrapper>
  ))
  .add('Loading', () => (
    <Wrapper>
      <Title>Button</Title>
      <Button isLoading={boolean('Loading', true)} onClick={action('clicked')}>
        {text('Placeholder', 'Loading...')}
      </Button>
      <H2>Source Code</H2>
      <Code>
        &lt;Button isLoading onClick=&#123;...&#125;&gt;...&lt;/Button&gt;
      </Code>
    </Wrapper>
  ));
