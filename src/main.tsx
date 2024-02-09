import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/components/App';
import theme from '@/constants/theme';
import { ThemeProvider } from '@emotion/react';
import GlobalStyles from '@/components/GlobalStyles';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);