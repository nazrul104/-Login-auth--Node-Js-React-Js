import React from 'react';
import {connect} from 'react-redux';
import {sign_in} from '../actions/actions'
import {bindActionCreators} from 'redux'
import querystring from 'querystring'; 
import { push } from 'react-router-redux'
import request from '../request'
import { store } from '../reducers/store'
import {auth} from '../reducers/reducers'

class SignInForm extends React.Component {

constructor ()
{
  super();
  this.state={
    msg:null

  };

}



 signin_submit (e,useremail,password) {
   
e.preventDefault();

var sign_action=this.props.sign_in;



request.post('/auth/login', querystring.stringify({ useremail: useremail ,password: password }))
  .then( (response) => {
        if(response.data.success)
        {
        store.dispatch(push('/home'));
        return sign_action(response.data.token,useremail);
      }
      else {
            this.setState(
          {
              msg: "username password not matched"
          }
          )
        
      }
  })
  .catch( (error) => {
      this.setState(
          {
              msg: "username password not matched"
          }
          )
     

  });




 }


 show_msg() {

   return (
<div className="alert alert-success" role="alert">
  <strong>Ops !</strong> {this.state.msg}.
</div>


   )
 }

   render() {
      return (
<div className="card card-inverse card-danger text-xs-center">
      
  <div className="card-block">
<form onSubmit={ (e) =>  this.signin_submit(e,document.getElementById('useremail').value,document.getElementById('password').value)}>
  <h3> Sign In </h3>
  { this.state.msg? this.show_msg() : ""}

  <hr/>
  <div className="form-group">
    <label >Email address</label>
    <input type="email"   className="form-control" id="useremail" aria-describedby="emailHelp" placeholder="Enter email"/>

  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password"  name="password" className="form-control" id="password" placeholder="Password"/>
  </div>

   <button type="submit"   className="btn btn-primary">Submit</button>
</form>
</div>
      </div>

      );
   }
};

function mapDispatch(dispatch) {
  return bindActionCreators({sign_in}, dispatch);
}

function mapState(state) {
  const { auth } = state;

  return { auth };
}







export default connect(mapState,mapDispatch)(SignInForm);