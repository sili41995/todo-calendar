import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/components/App';
import { theme } from '@/constants';
import { ThemeProvider } from '@emotion/react';
import GlobalStyles from '@/components/GlobalStyles';
import queryClient, { persister } from '@/tanStackQuery/client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Toast from '@/components/Toast';
import { BrowserRouter } from 'react-router-dom';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PersistQueryClientProvider
          client={queryClient}
          persistOptions={{ persister }}
        >
          <App />
          <GlobalStyles />
          <Toast />
          <ReactQueryDevtools initialIsOpen={false} />
        </PersistQueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
