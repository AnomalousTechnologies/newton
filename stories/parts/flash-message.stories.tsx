import React from 'react';

import styled from '@emotion/styled';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Code from '../../src/bolts/code';
import H1 from '../../src/bolts/h1';
import H2 from '../../src/bolts/h2';
import P from '../../src/bolts/p';
import FlashMessage from '../../src/parts/flash-message';
import { Wrapper } from '../utilities';

const Title = styled(H1)`
  margin-top: 0;
`;

const stories = storiesOf('Parts|Flash Message', module)
  .addDecorator(withKnobs)
  .addParameters({ options: { showPanel: true } });

stories.add('Message', () => (
  <Wrapper>
    <br/>
    <Title>Flash Message</Title>
    <P>Flash messages are absolutely positioned to the top of their parent element 👆🏼</P>
    <FlashMessage parent={document.body}>
      {text('Message', 'Example of a flash message')}
    </FlashMessage>
    <H2>Source Code</H2>
    <Code>
      &lt;FlashMessage<br/>
        &nbsp;&nbsp;className=&#123;...&#125;<br/>
        &nbsp;&nbsp;closeComponent=&#123;...&#125;<br/>
        &nbsp;&nbsp;onClose=&#123;...&#125;<br/>
        &nbsp;&nbsp;parent=&#123;...&#125;<br/>
      &gt;<br />
      &nbsp;&nbsp;...<br />
      &lt;/FlashMessage&gt;
    </Code>
  </Wrapper>
));
