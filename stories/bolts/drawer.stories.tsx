import React from 'react';

import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Drawer, { DrawerPosition } from '../../src/bolts/content/drawer';
import Code from '../../src/bolts/typography/code';
import H1 from '../../src/bolts/typography/h1';
import H2 from '../../src/bolts/typography/h2';
import { Wrapper } from '../utilities';

const WrapperFullHeight = styled(Wrapper)`
  height: 70vh;
`;

const Title = styled(H1)`
  margin-top: 0;
`;

storiesOf('Bolts|Drawer', module)
  .addDecorator(withKnobs)
  .addParameters({
    options: { showPanel: true },
  })
  .add('Right', () => (
    <WrapperFullHeight>
      <Title>Drawer Right</Title>
      <Drawer
        isOpen={select('Open', { open: true, close: false }, true)}
        position={DrawerPosition.RIGHT}
        size={text('Size', '50%')}
      />
      <H2>Source Code</H2>
      <Code>
        import &#123; Drawer, DrawerPosition &#125; from '@anomalous/newton';<br/>
        <br/>
        &lt;Drawer isOpen position=&#123;...&#125; size=&#123;...&#125; /&gt;
      </Code>
    </WrapperFullHeight>
  ))
  .add('Bottom', () => (
    <WrapperFullHeight>
      <Title>Drawer Bottom</Title>
      <Drawer
        isOpen={select('Open', { open: true, close: false }, true)}
        position={DrawerPosition.BOTTOM}
        size={text('Size', '80%')}
      />
      <H2>Source Code</H2>
      <Code>
        import &#123; Drawer, DrawerPosition &#125; from '@anomalous/newton';<br/>
        <br/>
        &lt;Drawer isOpen position=&#123;...&#125; size=&#123;...&#125; /&gt;
      </Code>
    </WrapperFullHeight>
  ));
