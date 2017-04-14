
export const sign_in = (token,useremail) => {
  localStorage.setItem('token', token);
  localStorage.setItem('useremail', useremail);

  return {
    type: 'LOGIN_SUCCESS',
    auth : {
            token: token,
            useremail: useremail,
    }
    
  }
}

export const logout = () => {
 localStorage.removeItem('token');
localStorage.removeItem('useremail');

  return {
    type: 'LOGOUT_SUCCESS',
    
  }
}