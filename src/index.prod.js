import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('app');
const root = hydrateRoot(
  container,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
