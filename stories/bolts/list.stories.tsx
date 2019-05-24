import React from 'react';

import styled from '@emotion/styled';
import { storiesOf } from '@storybook/react';

import ListItem from '../../src/bolts/content/list-item';
import ListOrdered from '../../src/bolts/content/list-ordered';
import ListUnordered from '../../src/bolts/content/list-unordered';
import Code from '../../src/bolts/typography/code';
import H1 from '../../src/bolts/typography/h1';
import H2 from '../../src/bolts/typography/h2';
import P from '../../src/bolts/typography/p';
import { Wrapper } from '../utilities';

const Title = styled(H1)`
  margin-top: 0;
`;

const stories = storiesOf('Bolts|List', module)
  .addParameters({
    options: { showPanel: true },
  });

stories.add('Unordered', () => (
  <Wrapper>
    <Title>List</Title>
    <P>This is an example of an unordered list:</P>
    <ListUnordered>
      <ListItem>List Item One</ListItem>
      <ListItem>List Item Two</ListItem>
      <ListItem>List Item Three</ListItem>
    </ListUnordered>
    <H2>Source Code</H2>
    <Code>
      &lt;ListUnordered&gt;<br/>
        &nbsp;&nbsp;&lt;ListItem&gt;...&lt;/ListItem&gt;<br/>
        &nbsp;&nbsp;...<br/>
      &lt;/ListUnordered&gt;
    </Code>
  </Wrapper>
));

stories.add('Ordered', () => (
  <Wrapper>
  <Title>List</Title>
    <P>This is an example of an ordered list:</P>
    <ListOrdered>
      <ListItem>List Item One</ListItem>
      <ListItem>List Item Two</ListItem>
      <ListItem>List Item Three</ListItem>
    </ListOrdered>
    <H2>Source Code</H2>
    <Code>
      &lt;ListOrdered&gt;<br/>
        &nbsp;&nbsp;&lt;ListItem&gt;...&lt;/ListItem&gt;<br/>
        &nbsp;&nbsp;...<br/>
      &lt;/ListOrdered&gt;
    </Code>
  </Wrapper>
));
