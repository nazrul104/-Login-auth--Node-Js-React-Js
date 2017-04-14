import React from 'react';
import {logout} from '../actions/actions'
import { Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {auth} from '../reducers/reducers'
import { push } from 'react-router-redux'
import { store } from '../reducers/store'

class Nav extends React.Component {

  constructor() {
    super();

  }

  logout (e) {
e.preventDefault();
this.props.logout();
store.dispatch(push('/signin'));  

  }

   protected_root() {

      return (
      <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item active">
        <Link className="nav-link" to="/home">Home</Link>
      </li>
       <li className="nav-item active">
        <Link className="nav-link" to="/another">Another</Link>
      </li>
       <li className="nav-item active">
        <a className="nav-link" onClick={(e) => this.logout(e)} >Logout</a>
      </li>
    </ul>
  </div>
    

      );
  }

  unprotected_root() {

      return (
      <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item active">
        <Link className="nav-link" to="/signin">Login</Link>
      </li>
       <li className="nav-item">
        <Link className="nav-link" to="/signup">SignUp</Link>
      </li>
    </ul>
  </div>
    

      );
  }

   render() {
      return (
 <div>
     <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="#">Navbar</a>
  { (this.props.auth!=null)? this.protected_root(): this.unprotected_root() }


</nav>

 </div>

      );
   }
};

function mapDispatch(dispatch) {
  return bindActionCreators({logout}, dispatch);
}



function mapState(state) {
  const { auth } = state;
  return { auth };
}



export default connect(mapState,mapDispatch)(Nav);