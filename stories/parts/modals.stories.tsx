import React from 'react';

import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import CheckCircleIcon from '../../src/bolts/icons/check-circle';
import CrossCircleIcon from '../../src/bolts/icons/cross-circle';
import Button, { ButtonSize, ButtonType } from '../../src/bolts/inputs/button';
import Code from '../../src/bolts/typography/code';
import H1 from '../../src/bolts/typography/h1';
import H2 from '../../src/bolts/typography/h2';
import ModalAction from '../../src/parts/modal-action';
import ModalConfirm from '../../src/parts/modal-confirm';
import ModalOption from '../../src/parts/modal-option';
import { Wrapper } from '../utilities';

const Title = styled(H1)`
  margin-top: 0;
`;

const ActionButton = styled(Button)`
  margin: 0 .5rem;
`;

const stories = storiesOf('Parts|Modals', module)
  .addDecorator(withKnobs)
  .addParameters({ options: { showPanel: true } });

stories.add('Action', () => (
  <Wrapper>
    <Title>Action Modal</Title>
    <ModalAction
      label={text('Label', 'OK')}
      onAction={action('clicked')}
    >
      {text('Body', 'Do something cool?')}
    </ModalAction>
    <H2>Source Code</H2>
    <Code>
      import &#123; ModalAction &#125; from '@anomalous/newton';<br/>
      <br/>
      &lt;ModalAction<br/>
        &nbsp;&nbsp;label=&#123;...&#125;<br/>
        &nbsp;&nbsp;onAction=&#123;...&#125;<br/>
      &gt;<br/>
      &nbsp;&nbsp;Modal body copy will go here<br/>
      &lt;/ModalAction&gt;
    </Code>
  </Wrapper>
));

stories.add('Confirm', () => (
  <Wrapper>
    <Title>Confirm Modal</Title>
    <ModalConfirm
      labelConfirm={text('Label', 'Yes')}
      labelReject={text('Label', 'No')}
      onConfirm={action('clicked yes')}
      onReject={action('clicked no')}
    >
      {text('Body', 'This is an example of some very long text that the user should read please')}
    </ModalConfirm>
    <H2>Source Code</H2>
    <Code>
      import &#123; ModalConfirm &#125; from '@anomalous/newton';<br/>
      <br/>
      &lt;ModalConfirm<br/>
        &nbsp;&nbsp;labelConfirm=&#123;...&#125;<br/>
        &nbsp;&nbsp;labelReject=&#123;...&#125;<br/>
        &nbsp;&nbsp;onConfirm=&#123;...&#125;<br/>
        &nbsp;&nbsp;onReject=&#123;...&#125;<br/>
      &gt;<br/>
      &nbsp;&nbsp;Modal body copy will go here<br/>
      &lt;/ModalConfirm&gt;
    </Code>
  </Wrapper>
));

stories.add('Option', () => (
  <Wrapper>
    <Title>Option Modal</Title>
    <ModalOption
      buttons={[
        <ActionButton
          icon={<CheckCircleIcon />}
          onClick={action('clicked option a')}
          size={ButtonSize.SMALL}
          type={ButtonType.PRIMARY}
        >
          Option A
        </ActionButton>,
        <ActionButton
          icon={<CrossCircleIcon />}
          onClick={action('clicked option b')}
          size={ButtonSize.SMALL}
          type={ButtonType.WARNING}
        >
          Option B
        </ActionButton>,
      ]}
    >
      {text('Body', 'This is an example of some very long text that the user should read please')}
    </ModalOption>
    <H2>Source Code</H2>
    <Code>
      import &#123; ModalOption &#125; from '@anomalous/newton';<br/>
      <br/>
      &lt;ModalOption buttons=&#123;[&lt;Button ... /&gt;]&#125;&gt;<br/>
      &nbsp;&nbsp;Modal body copy will go here<br/>
      &lt;/ModalOption&gt;
    </Code>
  </Wrapper>
));
