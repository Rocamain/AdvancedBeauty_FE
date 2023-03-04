import { ThemeProvider } from '@mui/material/styles';
import theme from 'styles/theme';
import './styles/index.css';
import App from 'App';
import '@fontsource/abel';
import '@fontsource/open-sans';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <App tab="home" />
  </ThemeProvider>
);
