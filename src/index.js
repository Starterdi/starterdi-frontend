import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './page/Home';
import Chat from './page/Chat';
import Welcome from './page/Welcome';
import Login from './page/Login';
import Join from './page/Join';
import reportWebVitals from './reportWebVitals';
import './style.scss';

ReactDOM.render(
  <BrowserRouter >
    <Switch>
      <Route path='/5' exact component={Welcome} />
      <Route path='/5/main' component={Home} />
      <Route path='/5/chat' component={Chat}/>
      <Route path='/5/login' component={Login}/>
      <Route path='/5/join' component={Join}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
