import React from 'react';
import ReactDOM from 'react-dom'; // Zmena: už to nie je z '/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Pôvodné renderovanie pre React 17
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
