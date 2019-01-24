import React, { Component } from 'react';
import {Route, Redirect} from "react-router-dom";
import ActionBar from './actionBar';
import MainTask from "./mainTask";
import AllTasks from "./allTasks";
import NewTask from "./newTask";
import AllComments from "./allComments";
import NewComment from "./newComment";

class dashboard extends Component {

  render() {
    return (
      <React.Fragment>
      <h2 className="m-5">Welcome Name</h2>
      <ActionBar/>
      <Route component={MainTask} path="/dashboard/home" exact></Route>
      <Redirect from ="/dashboard" to="/dashboard/home"/>
      <Route component={NewTask} path="/dashboard/newtask" exact></Route>
      <Route component={AllComments} path="/dashboard/allcomments" exact></Route>
      <Route component={NewComment} path="/dashboard/newcomment" exact></Route>

      <Route render={(props)=>{return (<AllTasks task="this is a task you"/>)}} path="/dashboard/alltasks" exact/>

      </React.Fragment>
    );
  }

}

export default dashboard;
