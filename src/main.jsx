import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import GlobalProvider from './context/GlobalContext.jsx'; // Importa el GlobalProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalProvider> {/* Envuelve el App con GlobalProvider */}
        <App />
      </GlobalProvider>
    </BrowserRouter>
  </StrictMode>
);
