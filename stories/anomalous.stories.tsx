import React from 'react';

import { storiesOf } from '@storybook/react';

import '../src/normalize.css';

import Welcome from './welcome';

storiesOf('Anomalous|Newton', module)
  .addParameters({
    options: { showPanel: false },
  })
  .add('Introduction', () => <Welcome />);
