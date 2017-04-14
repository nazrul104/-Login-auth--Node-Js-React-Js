import React from 'react';
import SignUpForm from '../containers/signup_form.jsx';


class Todos extends React.Component {
   render() {
      return (
         <div>
             <br/>
             <div className="row">
                 <div className="col-md-6 offset-md-3">
                        <SignUpForm />

                 </div>
             </div>
      
         </div>

      );
   }
};

export default Todos;