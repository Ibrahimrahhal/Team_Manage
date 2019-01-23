import React, {
  Component
} from 'react';


import {
  Route,
  Switch,
  Redirect,
  BrowserRouter
} from 'react-router-dom';


import Home from './home'
class App extends Component {

  render() {

    return ( <
      div >
      <
      Route path = "/"
      component = {
        Home
      }
      /> < /
      div >
    );
  }

}

export default App;