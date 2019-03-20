import { addDecorator, addParameters, configure } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-emotion-theme';

import storybookTheme from './storybookTheme';
import newtonTheme from '../src/theme';

addParameters({ options: { theme: storybookTheme } });

addDecorator(withThemesProvider([newtonTheme]));

const req = require.context('../stories', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
