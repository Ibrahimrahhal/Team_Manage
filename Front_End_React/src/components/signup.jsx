import React, { Component } from 'react';
import Joi from 'joi';
import {saveUser} from '../services/API';
class signup extends Component {
  state={
    UserName:"",
    Password:"",
    Email:"",
    teamIds:[],
    error:false,
    errorMessage:""
  };
error = false;
changeName = (e)=>{this.state.UserName =  e.target.value;this.setState(this.state);}
changePass = (e)=>{this.state.Password =  e.target.value;this.setState(this.state);}
changeEmail = (e)=>{this.state.Email =  e.target.value;this.setState(this.state);}
displayMessage = (m)=>{
  this.state.error = true;
  this.state.errorMessage = m;
  this.setState(this.state);

}
renderFalse = ()=> {
if(this.state.error) return(<div style={{color:"#da1f26",marginBottom:"5px"}}>{this.state.errorMessage}</div>)
};
submit= (e)=>{
  e.preventDefault();
  let user = {
    UserName: this.state.UserName,
    Password: this.state.Password,
    teamIds:this.state.teamIds,
    Email: this.state.Email
  };
if(
        Joi.validate(user,{
          UserName: Joi.string().required(),
          Password: Joi.string().required(),
          teamIds: Joi.array().required(),
          Email: Joi.string().email().required()
        }).error
)
{

this.displayMessage("Wrong Data Format");
}else{
this.displayMessage("Loading ....");
saveUser(user).then((data)=>{

  if(data === "userExist") {
  this.displayMessage("User Exists");
  }else {
    if(data === "1"){
      this.props.history.push("/login");
    }else{
      this.displayMessage("Server Error");
    }

  }
}).catch(err=>  this.displayMessage("Network Error"));
}
}
  render() {
    return (
      <React.Fragment>
      <br/>
      <br/>
      <br/>
      <h1 className="font-weight-light text-secondary">Create New Account To Help Organize Your Team</h1>
        <form className="mt-5 w-75 mx-auto d-flex justify-content-center flex-column align-items-center">
    <div className="form-group d-flex justify-content-center flex-column align-items-center w-100">
      <label htmlFor="exampleInputEmail1">Username</label>
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.UserName} onChange={this.changeName} />
    </div>
    <div className="form-group d-flex justify-content-center flex-column align-items-center w-100">
      <label htmlFor="exampleInputEmail1">Email</label>
      <input type="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.Email} onChange={this.changeEmail} />
    </div>
    <div className="form-group d-flex justify-content-center flex-column align-items-center w-100">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" value={this.Password} onChange={this.changePass} />
    </div>
    {this.renderFalse()}
    <button type="submit" className="btn btn-primary" onClick={this.submit}>Create</button>
  </form>
      </React.Fragment>
    );
  }


}

export default signup;
