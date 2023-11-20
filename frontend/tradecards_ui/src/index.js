import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthorizationContextProvider } from './context/AuthorizationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthorizationContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthorizationContextProvider>
);
