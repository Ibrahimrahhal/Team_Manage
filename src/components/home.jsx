import React, {Component} from 'react';
import './home.css';
class home extends Component {
renderHome(){
return (
  <React.Fragment>
<div>
<h1 className="">Manage Your Team More Effectively</h1>
<h2 className="font-weight-light">Create Task for Your Team Members</h2>

</div>

<div className="mt-5 d-flex justify-content-center flex-column align-items-center">
<button className="btn btn-primary m-2 w-50" >Login</button>
or
<button className="btn btn-link m-2">Sign Up</button>
</div>
</React.Fragment>

);



}
  render() {

    return this.renderHome();
  }

}

export default home;
