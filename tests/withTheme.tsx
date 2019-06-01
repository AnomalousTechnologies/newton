import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from '../src/theme';

const withTheme = (children: JSX.Element) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default withTheme;
