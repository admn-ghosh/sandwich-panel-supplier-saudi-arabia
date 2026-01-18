
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

// Check for language preference in URL
const urlParams = new URLSearchParams(window.location.search);
const isArabic = urlParams.get('lang') === 'ar';

root.render(
  <React.StrictMode>
    <App initialLanguage={isArabic ? 'ar' : 'en'} />
  </React.StrictMode>
);
