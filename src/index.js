import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './page/Home';
import reportWebVitals from './reportWebVitals';
import './style.scss';

ReactDOM.render(
  <BrowserRouter basepath="5/">
    <Home />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
