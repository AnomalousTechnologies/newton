import React from 'react';

import { addDecorator, addParameters, configure } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import storybookTheme from './storybookTheme';
import newtonTheme from '../src/theme';

addParameters({ options: { theme: storybookTheme } });

const themeDecorator = (storyFn) => (
  <ThemeProvider theme={newtonTheme}>
    {storyFn()}
  </ThemeProvider>
);

addDecorator(themeDecorator);

const req = require.context('../stories', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
