import React from 'react';

import { storiesOf } from '@storybook/react';

import Welcome from './welcome';

storiesOf('Anomalous|Newton', module)
  .addParameters({
    info: { disable: true },
    options: { showPanel: false },
  })
  .add('Introduction', () => <Welcome />);
