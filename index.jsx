import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './wallet-connect';

const container = document.getElementById('wallet-connect-button');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error("Elemento 'wallet-connect-button' não encontrado");
} 