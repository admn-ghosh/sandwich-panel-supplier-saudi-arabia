import React from 'react';
import ReactDOM from 'react-dom/client';
import AppAr from './App-ar';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <AppAr />
    </React.StrictMode>
  );
}