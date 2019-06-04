import React from 'react';

import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Drawer, { DrawerPosition } from '../../src/bolts/content/drawer';
import Code from '../../src/bolts/typography/code';
import H1 from '../../src/bolts/typography/h1';
import H2 from '../../src/bolts/typography/h2';
import P from '../../src/bolts/typography/p';
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
  ))
  .add('Content', () => (
    <WrapperFullHeight>
      <Title>Drawer Bottom</Title>
      <Drawer
        isOpen={select('Open', { open: true, close: false }, true)}
        position={DrawerPosition.RIGHT}
        size={text('Size', '80%')}
      >
        <P style={{ padding: '4rem' }}>
          Hide when guests come over mark territory touch water with paw then recoil in
          horror eat a rug and furry furry hairs everywhere oh no human coming lie on counter
          don't get off counter, terrorize the hundred-and-twenty-pound rottweiler and steal
          his bed, not sorry, but chew foot. My slave human didn't give me any food so I
          pooped on the floor meow all night so I show my fluffy belly but it's a trap!
          If you pet it I will tear up your hand. Bird bird bird bird bird bird human
          why take bird out I could have eaten that eat a rug and furry furry hairs
          everywhere oh no human coming lie on counter don't get off counter or
          find a way to fit in tiny box. Roll over and sun my belly need to chase
          tail have a lot of grump in yourself because you can't forget to be grumpy
          and not be like king grumpy cat for this human feeds me, I should be a god
          so eat grass, throw it back up for if human is on laptop sit on the keyboard
          chase red laser dot. Stare at ceiling light my slave human didn't give me any
          food so I pooped on the floor go into a room to decide you didn't want to be
          in there anyway pushes butt to face the fat cat sat on the mat bat away with
          paws pose purrfectly to show my beauty for meow to be let out. Ptracy stare at
          owner accusingly then wink plan steps for world domination or behind the couch.
        </P>
      </Drawer>
      <H2>Source Code</H2>
      <Code>
        import &#123; Drawer, DrawerPosition &#125; from '@anomalous/newton';<br/>
        <br/>
        &lt;Drawer isOpen position=&#123;...&#125; size=&#123;...&#125; /&gt;
      </Code>
    </WrapperFullHeight>
  ));
