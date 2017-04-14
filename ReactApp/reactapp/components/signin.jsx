import React from 'react';
import SignInForm from '../containers/signin_form.jsx';


class Todos extends React.Component {
   render() {
      return (
         <div>
             <br/>
             <div className="row">
                 <div className="col-md-6 offset-md-3">
                        <SignInForm />

                 </div>
             </div>
      
         </div>

      );
   }
};

export default Todos;