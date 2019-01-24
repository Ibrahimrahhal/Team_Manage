import React, {Component} from 'react';


import {
  Route,
  Switch,
  Redirect,
  BrowserRouter
} from 'react-router-dom';

import Home from './home'
import Dashboard from './dashboard'
import Login from './Login'



class App extends Component {

  render() {

    return (
    <Switch>
      <Route path = "/dashboard"  component = {Dashboard}  />
      <Route path = "/login"  component = {Login}  />
      <Route path = "/"  component = {Home}  />

   </Switch>
    );
  }

}

export default App;
