import React from 'react';

import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import ArrowCircleDown from '../../src/bolts/icons/arrow-circle-down';
import ArrowCircleLeft from '../../src/bolts/icons/arrow-circle-left';
import ArrowCircleRight from '../../src/bolts/icons/arrow-circle-right';
import ArrowCircleUp from '../../src/bolts/icons/arrow-circle-up';
import CheckBadge from '../../src/bolts/icons/check-badge';
import CheckCircle from '../../src/bolts/icons/check-circle';
import CheckShield from '../../src/bolts/icons/check-shield';
import CrossBadge from '../../src/bolts/icons/cross-badge';
import CrossCircle from '../../src/bolts/icons/cross-circle';
import Cubes from '../../src/bolts/icons/cubes';
import ExclamationCircle from '../../src/bolts/icons/exclamation-circle';
import Expand from '../../src/bolts/icons/expand';
import MoonStars from '../../src/bolts/icons/moon-stars';
import PasswordReset from '../../src/bolts/icons/password-reset';
import PlusCircle from '../../src/bolts/icons/plus-circle';
import QuestionBadge from '../../src/bolts/icons/question-badge';
import Search from '../../src/bolts/icons/search';
import SignOut from '../../src/bolts/icons/sign-out';
import Spinner from '../../src/bolts/icons/spinner';
import Sun from '../../src/bolts/icons/sun';
import User from '../../src/bolts/icons/user';
import UserCircle from '../../src/bolts/icons/user-circle';

import Code from '../../src/bolts/typography/code';
import H1 from '../../src/bolts/typography/h1';
import H2 from '../../src/bolts/typography/h2';
import { Wrapper } from '../utilities';

const Title = styled(H1)`
  margin-top: 0;
`;

const iconStories = storiesOf('Bolts|Icons', module)
  .addParameters({
    options: { showPanel: false },
  });

[
  { component: 'ArrowCircleDownIcon', Element: ArrowCircleDown, title: 'Arrow Circle Down Icon' },
  { component: 'ArrowCircleLeftIcon', Element: ArrowCircleLeft, title: 'Arrow Circle Left Icon' },
  { component: 'ArrowCircleRightIcon', Element: ArrowCircleRight, title: 'Arrow Circle Right Icon' },
  { component: 'ArrowCircleUpIcon', Element: ArrowCircleUp, title: 'Arrow Circle Up Icon' },
  { component: 'CheckBadgeIcon', Element: CheckBadge, title: 'Check Badge Icon' },
  { component: 'CheckCircleIcon', Element: CheckCircle, title: 'Check Circle Icon' },
  { component: 'CheckShieldIcon', Element: CheckShield, title: 'Check Shield Icon' },
  { component: 'CrossBadgeIcon', Element: CrossBadge, title: 'Cross Badge Icon' },
  { component: 'CrossCircleIcon', Element: CrossCircle, title: 'Cross Circle Icon' },
  { component: 'CubesIcon', Element: Cubes, title: 'Cubes Icon' },
  { component: 'ExclamationCircleIcon', Element: ExclamationCircle, title: 'Exclamation Circle Icon' },
  { component: 'ExpandIcon', Element: Expand, title: 'Expand Icon' },
  { component: 'MoonStarsIcon', Element: MoonStars, title: 'Moon Stars Icon' },
  { component: 'PasswordResetIcon', Element: PasswordReset, title: 'Password Reset Icon' },
  { component: 'PlusCircleIcon', Element: PlusCircle, title: 'Plus Circle Icon' },
  { component: 'QuestionBadgeIcon', Element: QuestionBadge, title: 'Question Badge Icon' },
  { component: 'SearchIcon', Element: Search, title: 'Search Icon' },
  { component: 'SignOutIcon', Element: SignOut, title: 'Sign Out Icon' },
  { component: 'SpinnerIcon', Element: Spinner, title: 'Spinner Icon' },
  { component: 'SunIcon', Element: Sun, title: 'Sun Icon' },
  { component: 'UserCircleIcon', Element: UserCircle, title: 'User Circle Icon' },
  { component: 'UserIcon', Element: User, title: 'User Icon' },
].forEach(({ component, Element, title }) => {
  iconStories.add(title, () => (
    <Wrapper>
      <Title>{title}</Title>
      <Element style={{ width: '120px' }} />
      <H2>Source Code</H2>
      <Code>
        import &#123; {component} &#125; from '@anomalous/newton';<br/>
        <br/>
        &lt;{component} /&gt;
      </Code>
    </Wrapper>
  ));
});
