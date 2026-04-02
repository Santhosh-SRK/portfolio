import { createTheme, PaletteMode } from '@mui/material';

// Returns a MUI theme based on light/dark mode
export const createAppTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#6C63FF',
        light: '#9D97FF',
        dark: '#4B44CC',
      },
      secondary: {
        main: '#FF6584',
      },
      background: {
        default: mode === 'dark' ? '#0D0D1A' : '#F8F9FF',
        paper: mode === 'dark' ? '#13132B' : '#FFFFFF',
      },
      text: {
        primary: mode === 'dark' ? '#E8E8FF' : '#1A1A2E',
        secondary: mode === 'dark' ? '#9090BB' : '#555577',
      },
    },
    typography: {
      fontFamily: '"Sora", "Inter", sans-serif',
      h1: { fontWeight: 800, letterSpacing: '-0.02em' },
      h2: { fontWeight: 700, letterSpacing: '-0.01em' },
      h3: { fontWeight: 700 },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 600 },
      body1: { lineHeight: 1.7 },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 8,
            padding: '10px 24px',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: mode === 'dark'
              ? '0 4px 24px rgba(0,0,0,0.4)'
              : '0 4px 24px rgba(108,99,255,0.08)',
          },
        },
      },
    },
  });
