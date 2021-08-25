import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './page/Home';
import Chat from './page/Chat';
import Welcome from './page/Welcome';
import Login from './page/Login';
import reportWebVitals from './reportWebVitals';
import './style.scss';

ReactDOM.render(
  <BrowserRouter basepath="welcome">
    <Switch>
      <Route path='/' exact component={Welcome} />
      <Route path='/main' component={Home} />
      <Route path='/chat' component={Chat}/>
      <Route path='/login' component={Login}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
