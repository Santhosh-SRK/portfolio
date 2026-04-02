import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Google Fonts: Sora
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
