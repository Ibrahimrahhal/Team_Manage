import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class actionBar extends Component {

  render() {
    return (

      <div className="btn-group  d-flex w-100 justify-content-center px-5 mb-5" role="group" aria-label="Basic example">
        <NavLink  className="btn btn-primary"  to="/dashboard/home" >Home</NavLink>
        <NavLink  className="btn btn-primary"  to="/dashboard/alltasks" >Your Tasks</NavLink>
        <NavLink  className="btn btn-primary" to="/uoou">Team Tasks</NavLink>
        <NavLink  className="btn btn-primary" to="/jno">Add New Task</NavLink>
        <NavLink  className="btn btn-primary" to="/iojoi">Leave Comment to The Team</NavLink>
      </div>
    );
  }

}

export default actionBar;
