import { ThemeProvider } from '@mui/material/styles';
import theme from 'styles/theme';
import './styles/index.css';
import App from 'App';
import '@fontsource/abel';
import '@fontsource/open-sans';
import React from 'react';
import ReactDOM from 'react-dom';
const root = document.getElementById('root');

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  root
);
