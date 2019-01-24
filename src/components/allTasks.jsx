import React, { Component } from 'react';
class AllTasks extends Component {
  render() {
    return (
      <div className="px-3 py-2 bg-primary w-75 mx-auto  rounded"><h2 className="text-light font-weight-light">{this.props.task}</h2></div>
    );
  }

}

export default AllTasks;
