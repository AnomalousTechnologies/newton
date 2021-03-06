import React from 'react';

import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Hr from '../../src/bolts/content/hr';
import Code from '../../src/bolts/typography/code';
import H1 from '../../src/bolts/typography/h1';
import H2 from '../../src/bolts/typography/h2';
import H3 from '../../src/bolts/typography/h3';
import H4 from '../../src/bolts/typography/h4';
import P from '../../src/bolts/typography/p';
import Small from '../../src/bolts/typography/small';
import Strong from '../../src/bolts/typography/strong';
import Sub from '../../src/bolts/typography/sub';
import Sup from '../../src/bolts/typography/sup';
import Xsmall from '../../src/bolts/typography/xsmall';
import { Wrapper } from '../utilities';

const Title = styled(H1)`
  margin-top: 0;
`;

const stories = storiesOf('Bolts|Typography', module)
  .addDecorator(withKnobs)
  .addParameters({
    options: { showPanel: true },
  });

stories.add('Code', () => (
  <Wrapper>
    <Title>Code</Title>
    <P>Here is an example of text wrapped in a code tag</P>
    <Code>
      yarn add @anomalous/newton
    </Code>
    <H2>Source Code</H2>
    <Code>
      import &#123; Code &#125; from '@anomalous/newton';<br/>
      <br/>
      &lt;Code&gt;...&lt;/Code&gt;
    </Code>
  </Wrapper>
));

stories.add('H1', () => (
  <Wrapper>
    <Title>H1</Title>
    <H1>{text('Heading', 'Example Heading Level 1')}</H1>
    <P>{text('Content', `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.`)}</P>
    <H2>Source Code</H2>
    <Code>
      import &#123; H1 &#125; from '@anomalous/newton';<br/>
      <br/>
      &lt;H1&gt;...&lt;/H1&gt;
    </Code>
  </Wrapper>
));

stories.add('H2', () => (
  <Wrapper>
    <Title>H2</Title>
    <H2>{text('Heading', 'Example Heading Level 2')}</H2>
    <P>{text('Content', `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.`)}</P>
    <H2>Source Code</H2>
    <Code>
      import &#123; H2 &#125; from '@anomalous/newton';<br/>
      <br/>
      &lt;H2&gt;...&lt;/H2&gt;
    </Code>
  </Wrapper>
));

stories.add('H3', () => (
  <Wrapper>
    <Title>H3</Title>
    <H3>{text('Heading', 'Example Heading Level 3')}</H3>
    <P>{text('Content', `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.`)}</P>
    <H2>Source Code</H2>
    <Code>
      import &#123; H3 &#125; from '@anomalous/newton';<br/>
      <br/>
      &lt;H3&gt;...&lt;/H3&gt;
    </Code>
  </Wrapper>
));

stories.add('H4', () => (
  <Wrapper>
    <Title>H4</Title>
    <H4>{text('Heading', 'Example Heading Level 4')}</H4>
    <P>{text('Content', `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.`)}</P>
    <H2>Source Code</H2>
    <Code>
      import &#123; H4 &#125; from '@anomalous/newton';<br/>
      <br/>
      &lt;H4&gt;...&lt;/H4&gt;
    </Code>
  </Wrapper>
));

stories.add('Hard Rule', () => (
  <Wrapper>
    <Title>Hard Rule</Title>
    <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.</P>
    <Hr />
    <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.</P>
    <H2>Source Code</H2>
    <Code>
      import &#123; Hr &#125; from '@anomalous/newton';<br/>
      <br/>
      &lt;Hr /&gt;
    </Code>
  </Wrapper>
));

stories.add('P', () => (
  <Wrapper>
    <Title>P</Title>
    <P>{text('Content', `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.`)}</P>
    <H2>Source Code</H2>
    <Code>
      import &#123; P &#125; from '@anomalous/newton';<br/>
      <br/>
      &lt;P&gt;...&lt;/P&gt;
    </Code>
  </Wrapper>
));

stories.add('Small', () => (
  <Wrapper>
    <Title>Small</Title>
    <P>Here is an example of some <Small>text that has been made small</Small>.</P>
    <H2>Source Code</H2>
    <Code>
      import &#123; Small &#125; from '@anomalous/newton';<br/>
      <br/>
      &lt;Small&gt;...&lt;/Small&gt;
    </Code>
  </Wrapper>
));

stories.add('Strong', () => (
  <Wrapper>
    <Title>Strong</Title>
    <P>Here is an example of some <Strong>text that has been made marked as strong</Strong>.</P>
    <H2>Source Code</H2>
    <Code>
      import &#123; Strong &#125; from '@anomalous/newton';<br/>
      <br/>
      &lt;Strong&gt;...&lt;/Strong&gt;
    </Code>
  </Wrapper>
));

stories.add('Sub', () => (
  <Wrapper>
    <Title>Sub</Title>
    <P>This sentence has <Sub>{text('Content', 'an example of subscript')}</Sub> placed within it.</P>
    <H2>Source Code</H2>
    <Code>
      import &#123; Sub &#125; from '@anomalous/newton';<br/>
      <br/>
      &lt;Sub&gt;...&lt;/Sub&gt;
    </Code>
  </Wrapper>
));

stories.add('Sup', () => (
  <Wrapper>
    <Title>Sup</Title>
    <P>This sentence has <Sup>{text('Content', 'an example of superscript')}</Sup> placed within it.</P>
    <H2>Source Code</H2>
    <Code>
      import &#123; Sup &#125; from '@anomalous/newton';<br/>
      <br/>
      &lt;Sup&gt;...&lt;/Sup&gt;
    </Code>
  </Wrapper>
));

stories.add('XSmall', () => (
  <Wrapper>
    <Title>Extra Small</Title>
    <P>Here is an example of some <Xsmall>text that has been made small</Xsmall>.</P>
    <H2>Source Code</H2>
    <Code>
      import &#123; Xsmall &#125; from '@anomalous/newton';<br/>
      <br/>
      &lt;Xsmall&gt;...&lt;/Xsmall&gt;
    </Code>
  </Wrapper>
));
