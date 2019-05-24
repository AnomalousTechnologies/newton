import React from 'react';

import styled from '@emotion/styled';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Avatar, { AvatarSize } from '../../src/bolts/content/avatar';
import Code from '../../src/bolts/typography/code';
import H1 from '../../src/bolts/typography/h1';
import H2 from '../../src/bolts/typography/h2';
import { Wrapper } from '../utilities';

const Title = styled(H1)`
  margin-top: 0;
`;

storiesOf('Bolts|Avatar', module)
  .addDecorator(withKnobs)
  .addParameters({
    options: { showPanel: true },
  })
  .add('Default', () => (
    <Wrapper>
      <Title>Avatar Default</Title>
      <Avatar
        name={text('Name', 'Matt Davies')}
        size={select('Size', [AvatarSize.SMALL, AvatarSize.LARGE], AvatarSize.LARGE)}
        src={text('Source', '')}
      />
      <H2>Source Code</H2>
      <Code>
        &lt;Avatar name=&#123;...&#125; src=&#123;...&#125; /&gt;
      </Code>
    </Wrapper>
  ))
  .add('Large', () => (
    <Wrapper>
      <Title>Avatar Large</Title>
      <Avatar
        name={text('Name', 'Phyllis Thompson')}
        src={text('Source', 'https://randomuser.me/api/portraits/women/59.jpg')}
      />
      <H2>Source Code</H2>
      <Code>
        &lt;Avatar name=&#123;...&#125; size=&#123;...&#125; src=&#123;...&#125; /&gt;
      </Code>
    </Wrapper>
  ))
  .add('Small', () => (
    <Wrapper>
      <Title>Avatar Small</Title>
      <Avatar
        name={text('Name', 'Kevin Torres')}
        size={AvatarSize.SMALL}
        src={text('Source', 'https://randomuser.me/api/portraits/men/92.jpg')}
      />
      <H2>Source Code</H2>
      <Code>
        &lt;Avatar name=&#123;...&#125; size=&#123;...&#125; src=&#123;...&#125; /&gt;
      </Code>
    </Wrapper>
  ));
