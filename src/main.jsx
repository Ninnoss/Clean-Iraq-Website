import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './i18n/config';
import './index.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <React.Suspense fallback="loading">
        <App />
      </React.Suspense>
    </Router>
  </React.StrictMode>
);
