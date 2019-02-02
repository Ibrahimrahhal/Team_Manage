import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class actionBar extends Component {

  render() {
    return (

      <div className="btn-group  d-flex w-100 justify-content-center px-5 mb-5" role="group" aria-label="Basic example">
        <NavLink  className="btn btn-primary py-2"  to="/dashboard/home" >Home</NavLink>
        <NavLink  className="btn btn-primary py-2"  to="/dashboard/alltasks" >Your Tasks</NavLink>
        <NavLink  className="btn btn-primary py-2" to="/dashboard/newtask">Create New Task</NavLink>
        <NavLink  className="btn btn-primary py-2" to="/dashboard/allcomments">Team Comments</NavLink>
        <NavLink  className="btn btn-primary py-2" to="/dashboard/newcomment">Leave Comment</NavLink>
      </div>
    );
  }i

}

export default actionBar;
