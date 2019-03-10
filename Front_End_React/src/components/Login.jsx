import React, { Component } from 'react';

class Login extends Component {
state ={
  UserName:"",
  Password:""
}
  change = (e)=>{
this.state[e.target.id] = e.target.value;
this.setState(this.state);

  }
  render() {

    return (
      <React.Fragment>
      <br/>
      <br/>
      <br/>
      <h1 className="font-weight-light text-secondary">Login To Mange Your Assigned Tasks</h1>
        <form className="mt-5 w-75 mx-auto d-flex justify-content-center flex-column align-items-center">
    <div className="form-group d-flex justify-content-center flex-column align-items-center w-100">
      <label htmlFor="UserName">Username</label>
      <input type="text" className="form-control" id="UserName" aria-describedby="emailHelp" onChange={this.change} value ={this.state.UserName}/>
    </div>
    <div className="form-group d-flex justify-content-center flex-column align-items-center w-100">
      <label htmlFor="Password">Password</label>
      <input type="password" className="form-control" id="Password" value = {this.state.Password}  onChange={this.change} />
    </div>
    <button type="submit" className="btn btn-primary">Login</button>
  </form>
      </React.Fragment>
    );
  }

}

export default Login;
