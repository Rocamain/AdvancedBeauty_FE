import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import './index.css';
import App from './App';
import '@fontsource/abel';
import '@fontsource/open-sans';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ThemeProvider theme={theme}>
    <App tab="home" />
  </ThemeProvider>
);
