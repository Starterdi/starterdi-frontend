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
import PrivateRoute from './lib/PrivateRoute';
import LoginRoute from './lib/LoginRoute';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/5' exact component={Welcome} />
      <PrivateRoute path='/5/main' component={Home} />     
      <PrivateRoute path='/5/chat' component={Chat}/>
      <LoginRoute path='/5/login' component={Login}/>
      <LoginRoute path='/5/join' component={Join}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
