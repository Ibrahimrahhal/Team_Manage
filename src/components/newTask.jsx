import React, { Component } from 'react';

class newTask extends Component {

  render() {
    return (
      <form className="w-75 mx-auto d-block">
  <div className="form-group">
    <label for="exampleInputEmail1">Team Member</label>
    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Name" />
    <small id="emailHelp" className="form-text text-muted">Make Sure to Enter The Name Right</small>
  </div>

  <div className="form-group">
    <label for="exampleInputEmail1">Task</label>
    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Team Member Name" />
  </div>

    <div className="form-group">
      <label for="exampleInputEmail1">Dead Line</label>
      <input type="date" className="form-control" id="exampleInputEmail1"  />
    </div>

  <button type="submit" className="btn btn-primary">Create</button>
</form>



  );
  }

}

export default newTask;
