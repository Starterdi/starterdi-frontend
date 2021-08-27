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
      {/* <Route path='/5' exact component={Welcome} /> */}
      <Route path='/welcome' exact component={Welcome} />
      <Route path='/main' component={Home} />
      <Route path='/chat' component={Chat}/>
      <Route path='/login' component={Login}/>
      <Route path='/join' component={Join}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
