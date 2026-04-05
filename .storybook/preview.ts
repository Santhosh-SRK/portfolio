import type { Preview } from '@storybook/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createAppTheme } from '../src/styles/theme';
import React from 'react';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0D0D1A' },
        { name: 'light', value: '#F8F9FF' },
      ],
    },
  },
  // Wrap every story with the MUI ThemeProvider
  decorators: [
    (Story, context) => {
      const mode = context.globals?.backgrounds?.value === '#F8F9FF' ? 'light' : 'dark';
      return React.createElement(
        ThemeProvider,
        { theme: createAppTheme(mode) },
        React.createElement(CssBaseline),
        React.createElement(Story)
      );
    },
  ],
};

export default preview;
