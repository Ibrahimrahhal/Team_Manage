import React, { Component } from 'react';

class signup extends Component {

  render() {
    return (
      <React.Fragment>
      <br/>
      <br/>
      <br/>
      <h1 className="font-weight-light text-secondary">Create New Account To Help Organize Your Team</h1>
        <form className="mt-5 w-75 mx-auto d-flex justify-content-center flex-column align-items-center">
    <div className="form-group d-flex justify-content-center flex-column align-items-center w-100">
      <label for="exampleInputEmail1">Username</label>
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className="form-group d-flex justify-content-center flex-column align-items-center w-100">
      <label for="exampleInputEmail1">Email</label>
      <input type="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className="form-group d-flex justify-content-center flex-column align-items-center w-100">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" />
    </div>
    <button type="submit" className="btn btn-primary">Create</button>
  </form>
      </React.Fragment>
    );
  }

}

export default signup;
