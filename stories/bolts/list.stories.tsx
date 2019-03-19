import React from 'react';

import { storiesOf } from '@storybook/react';

import ListItem from '../../src/bolts/list-item';
import ListOrdered from '../../src/bolts/list-ordered';
import ListUnordered from '../../src/bolts/list-unordered';
import P from '../../src/bolts/p';
import { Wrapper } from '../utilities';

const stories = storiesOf('Bolts|List', module)
  .addParameters({
    info: { disable: true },
    options: { showPanel: true },
  });

stories.add('Unordered', () => (
  <Wrapper>
    <P>This is an example of an unordered list:</P>
    <ListUnordered>
      <ListItem>List Item One</ListItem>
      <ListItem>List Item Two</ListItem>
      <ListItem>List Item Three</ListItem>
    </ListUnordered>
  </Wrapper>
));

stories.add('Ordered', () => (
  <Wrapper>
    <P>This is an example of an ordered list:</P>
    <ListOrdered>
      <ListItem>List Item One</ListItem>
      <ListItem>List Item Two</ListItem>
      <ListItem>List Item Three</ListItem>
    </ListOrdered>
  </Wrapper>
));
