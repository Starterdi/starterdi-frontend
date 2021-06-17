import React from 'react';
import ReactDOM from 'react-dom';
import Home from './page/Home';
import reportWebVitals from './reportWebVitals';
import './style.scss';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
