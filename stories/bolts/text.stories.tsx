import React from 'react';

import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Code from '../../src/bolts/code';
import H1 from '../../src/bolts/h1';
import H2 from '../../src/bolts/h2';
import H3 from '../../src/bolts/h3';
import H4 from '../../src/bolts/h4';
import Hr from '../../src/bolts/hr';
import P from '../../src/bolts/p';
import Small from '../../src/bolts/small';
import Strong from '../../src/bolts/strong';
import Sub from '../../src/bolts/sub';
import Sup from '../../src/bolts/sup';
import { Wrapper } from '../utilities';

const stories = storiesOf('Bolts|Text', module)
  .addDecorator(withKnobs)
  .addParameters({
    options: { showPanel: true },
  });

stories.add('Code', () => (
  <Wrapper>
    <P>Here is an example of text wrapped in a code tag</P>
    <Code>
      yarn add @anomalous/newton
    </Code>
  </Wrapper>
));

stories.add('H1', () => (
  <Wrapper>
    <H1>{text('Heading', 'Example Heading Level 1')}</H1>
    <P>{text('Content', `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.`)}</P>
  </Wrapper>
));

stories.add('H2', () => (
  <Wrapper>
    <H2>{text('Heading', 'Example Heading Level 2')}</H2>
    <P>{text('Content', `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.`)}</P>
  </Wrapper>
));

stories.add('H3', () => (
  <Wrapper>
    <H3>{text('Heading', 'Example Heading Level 3')}</H3>
    <P>{text('Content', `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.`)}</P>
  </Wrapper>
));

stories.add('H4', () => (
  <Wrapper>
    <H4>{text('Heading', 'Example Heading Level 4')}</H4>
    <P>{text('Content', `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.`)}</P>
  </Wrapper>
));

stories.add('Hard Rule', () => (
  <Wrapper>
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
  </Wrapper>
));

stories.add('P', () => (
  <Wrapper>
    <P>{text('Content', `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.`)}</P>
  </Wrapper>
));

stories.add('Small', () => (
  <Wrapper>
    <P>Here is an example of some <Small>text that has been made small</Small>.</P>
  </Wrapper>
));

stories.add('Strong', () => (
  <Wrapper>
    <P>Here is an example of some <Strong>text that has been made marked as strong</Strong>.</P>
  </Wrapper>
));

stories.add('Sub', () => (
  <Wrapper>
    <P>This sentence has <Sub>{text('Content', 'an example of subscript')}</Sub> placed within it.</P>
  </Wrapper>
));

stories.add('Sup', () => (
  <Wrapper>
    <P>This sentence has <Sup>{text('Content', 'an example of superscript')}</Sup> placed within it.</P>
  </Wrapper>
));
