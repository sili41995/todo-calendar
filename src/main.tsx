import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/components/App';
import theme from '@/constants/theme';
import { ThemeProvider } from '@emotion/react';
import GlobalStyles from '@/components/GlobalStyles';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/tanStackQuery/client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Toast from '@/components/Toast';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <App />
          <GlobalStyles />
          <Toast />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
