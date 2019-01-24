import React, {Component} from 'react';


import {
  Route,
  Switch,
  Redirect,
  BrowserRouter
} from 'react-router-dom';

import Home from './home'
import Dashboard from './dashboard'



class App extends Component {

  render() {

    return (
    <Switch>
      <Route path = "/dashboard"  component = {Dashboard}  />
      <Route path = "/"  component = {Home}  />
   </Switch>
    );
  }

}

export default App;
