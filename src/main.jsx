import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './i18n/config';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <React.Suspense fallback="loading">
        <App />
      </React.Suspense>
    </Router>
  </React.StrictMode>
);
