import React, { Component } from 'react';

class AllComments extends Component {

  render() {
    return (
      <div className="px-3 py-2 bg-secondary w-75 mx-auto  rounded d-flex justify-content-between align-items-center">
      <h2 className="text-light font-weight-light d-inline ">
      This is Comment This is Comment
      </h2>
      <i className="fa fa-trash text-light icon"></i>
     </div>
    );
  }

}

export default AllComments;
