import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import './index.css';
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,

  document.getElementById('root')
);
