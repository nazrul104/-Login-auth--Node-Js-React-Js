import React from 'react';
import {connect} from 'react-redux';
import {sign_up} from '../actions/actions'
import {bindActionCreators} from 'redux'
import querystring from 'querystring'; 
import { push } from 'react-router-redux'
import request from '../request'
import { store } from '../reducers/store'


class SignUpForm extends React.Component {
 signup_submit (e,useremail,password) {
e.preventDefault();

var sign_up=this.props.sign_up;

request.post('/auth/signup', querystring.stringify({ useremail: useremail ,password: password }))
  .then(function (response) {
    store.dispatch(push('/signin'));    
  })
  .catch(function (error) {
    console.log(error);
  });

 }

   render() {
      return (
      <div className="card card-inverse card-primary text-xs-center">

  <div className="card-block">
<form>
  <h3> Registration </h3>
  <hr/>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email"  className="form-control" id="useremail" aria-describedby="emailHelp" placeholder="Enter email"/>

  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name="password" className="form-control" id="password" placeholder="Password"/>
  </div>

   <button type="button" onClick={ (e) => this.signup_submit(e,document.getElementById('useremail').value, document.getElementById('password').value)}  className="btn btn-primary">Submit</button>
</form>
</div>
      </div>

      );
   }
};


function mapDispatch(dispatch) {
  return bindActionCreators({sign_up}, dispatch);
}

function mapState(state) {
  return { };
}






export default connect(mapState,mapDispatch)(SignUpForm);