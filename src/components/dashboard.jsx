import React, { Component } from 'react';
import {Route} from "react-router-dom";
import ActionBar from './actionBar';
import MainTask from "./mainTask";
import AllTasks from "./allTasks";

class dashboard extends Component {

  render() {
    return (
      <React.Fragment>
      <h2 className="m-5">Welcome Name</h2>
      <ActionBar/>
      <Route component={MainTask} path="/dashboard/home" exact></Route>

      <Route render={(props)=>{return (<AllTasks task="this is a task you"/>)}} path="/dashboard/alltasks" exact/>

      </React.Fragment>
    );
  }

}

export default dashboard;
