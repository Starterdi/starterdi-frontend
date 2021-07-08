import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './page/Home';
import Chat from './page/Chat';
import reportWebVitals from './reportWebVitals';
import './style.scss';

ReactDOM.render(
  // basepath="5/"
  <BrowserRouter>
    <Switch>
      <Route path='/main' component={Home} />
      <Route path='/chat' component={Chat} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
