import React from 'react';
import { Route } from 'react-router-dom';
import SignUp from './signup.jsx'
import SignIn from './signin.jsx'
import Home from './home.jsx'
import Another from './another.jsx'
import NotFound from './notfound.jsx'
import Nav from '../containers/nav.jsx'
import { store } from '../reducers/store'



class App extends React.Component {

  constructor () {
      super();
      
      this.state=store.getState();
      console.log(this.state);
      store.subscribe (()=> {
        this.setState({
             auth: store.getState().auth

        });
        
      })

  }

  protected_routes () {

    return  (

  <div className="container-fluid">
    {this.state.auth.useremail}
    <Route exact path="/" component={Home}/>
     <Route path="/another" component={Another} />
    <Route path="/home" component={Home} />
  </div>
      
    )
  }

  guest_routes () {

    return  (

  <div className="container-fluid">
    <Route exact path="/" component={SignIn} />
    <Route path="/signup" component={SignUp} />
     <Route path="/signin" component={SignIn} />
  </div>
      
    )
  }


   render() {
      return (
        <div>
        <Nav/>
        {  (this.state.auth!=null)? this.protected_routes() : this.guest_routes()}
         </div>

      );
   }
};

export default App;