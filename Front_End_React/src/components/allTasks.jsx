import React, { Component } from 'react';
import '../../node_modules/font-awesome/css/font-awesome.css';
class AllTasks extends Component {
  render() {
    return (
      <div className="px-3 py-2 bg-secondary w-75 mx-auto  rounded d-flex justify-content-between align-items-center">
      <h2 className="text-light font-weight-light d-inline ">
      {this.props.task}
      </h2>
      <i className="fa fa-trash text-light icon"></i>
     </div>
    );
  }

}

export default AllTasks;
