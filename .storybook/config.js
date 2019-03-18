import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withThemesProvider } from 'storybook-addon-emotion-theme';

import theme from '../src/theme';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

addDecorator(withInfo({ header: false }));
addDecorator(withThemesProvider([theme]));
