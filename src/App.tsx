import { useEffect, useState } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { createAppTheme } from './styles/theme';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Portfolio from './views/Portfolio';

const App = () => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') {
      return 'dark';
    }

    return window.localStorage.getItem('theme-mode') === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    window.localStorage.setItem('theme-mode', themeMode);
  }, [themeMode]);

  const theme = createAppTheme(themeMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header
          themeMode={themeMode}
          onToggleTheme={() =>
            setThemeMode((currentMode) => (currentMode === 'dark' ? 'light' : 'dark'))
          }
        />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Portfolio />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
