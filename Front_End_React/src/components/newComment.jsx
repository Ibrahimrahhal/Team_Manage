import React, { Component } from 'react';

class newComment extends Component {

  render() {
    return (
      <form className="w-75 mx-auto d-block">
  <div className="form-group">
    <label for="exampleInputEmail1">Enter Your Comment</label>
    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Type Here.." />

  </div>


  <button type="submit" className="btn btn-primary">Create</button>
</form>

    );
  }

}

export default newComment;
