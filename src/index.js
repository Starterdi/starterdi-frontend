import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './page/Home';
import Chat from './page/Chat';
import Welcome from './page/Welcome';
import Login from './page/Login';
import Join from './page/Join';
import MakeRoom from './page/MakeRoom';
import StudyRoom from './page/StudyRoom';
import StudyJoin from './page/StudyJoin';
import StudyRoomList from './page/StudyRoomList';
import reportWebVitals from './reportWebVitals';
import './style.scss';
import PrivateRoute from './lib/PrivateRoute';
import LoginRoute from './lib/LoginRoute';
import axios from 'axios';

// axios.defaults.baseURL = "http://test.itsw.info:10005";
axios.defaults.baseURL = "http://localhost:3309";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/5' exact component={Welcome} />
      <PrivateRoute path='/5/studyRoom/:id' component={StudyRoom} />
      <PrivateRoute path='/5/studyJoin/:id' component={StudyJoin} />
      <PrivateRoute path='/5/makeRoom' component={MakeRoom} />
      <PrivateRoute path='/5/main' component={Home} />     
      <PrivateRoute path='/5/chat' component={Chat}/>
      <PrivateRoute path='/5/studyRoom' component={StudyRoomList} />
      <LoginRoute path='/5/login' component={Login}/>
      <LoginRoute path='/5/join' component={Join}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
