import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/global';
import dark from 'styles/themes/main';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from 'pages/Home';
import { SpellsProvider } from 'contexts/spells';
import { UiProvider } from 'contexts/ui';

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <SpellsProvider>
      <UiProvider>
        <ThemeProvider theme={dark}>
          <ToastContainer autoClose={2000} position="top-right" />
          <GlobalStyle />
          <Home />
        </ThemeProvider>
      </UiProvider>
    </SpellsProvider>
  </QueryClientProvider>
);

export default App;
