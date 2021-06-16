import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './component/Header';
import Visual from './component/Visual';
import reportWebVitals from './reportWebVitals';
import './style.scss'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Visual />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
