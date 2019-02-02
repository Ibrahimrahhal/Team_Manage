import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './home.css';
class home extends Component {
renderHome(){
return (
  <div className="w-100 vh-100 d-flex align-item-center justify-content-center flex-column">
<div>
<h1 className="">Manage Your Team More Effectively</h1>
<h2 className="font-weight-light">Create Task for Your Team Members</h2>

</div>

<div className="mt-5 d-flex w-100 justify-content-center flex-column align-items-center">
<Link className="btn btn-primary m-2 w-50" to="/login" >Login</Link>
or
<Link className="btn btn-link m-2" to="/signup">Sign Up</Link>
</div>
</div>

);



}
  render() {

    return this.renderHome();
  }

}

export default home;
