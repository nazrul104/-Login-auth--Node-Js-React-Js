
import cookie from '../cookie'

function authdata () {

if (localStorage.getItem('token'))
{
 var data= {
    token: localStorage.getItem('token'),
    useremail:localStorage.getItem('useremail')
  }
  return data;
}
else {

  return null;
}
   
}


const auth = (state =authdata() , action) => {
  
  switch (action.type) {
    case 'LOGIN_SUCCESS': 
    {
    var new_state=action.auth;
    return new_state ;
    }
    case 'LOGOUT_SUCCESS': 
    {
      return null ;
    }
    
  
  }
   return state
}

export default {auth}