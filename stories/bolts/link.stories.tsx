import React from 'react';

import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Link from '../../src/bolts/link';
import P from '../../src/bolts/p';
import { Wrapper } from '../utilities';

const stories = storiesOf('Bolts|Link', module)
  .addDecorator(withKnobs)
  .addParameters({
    options: { showPanel: true },
  });

stories.add('Link', () => (
  <Wrapper>
    <P>This sentence has <Link>{text('Content', 'an example of a link')}</Link> placed within it.</P>
  </Wrapper>
));
