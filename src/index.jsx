import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import './styles/index.css';
import '@fontsource/abel';
import '@fontsource/open-sans';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App tab='home' />
    </ThemeProvider>
  </React.StrictMode>
);
