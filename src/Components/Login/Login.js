import React from 'react';
import useFirebase from '../Hooks/useFirebase';

const Login = () => {
      const { SignInWithGoogle } = useFirebase();
      return (
            <div>
                  <h2>Please Login</h2>
                  <div style={{ margin: '20px' }}>
                        <button onClick={SignInWithGoogle}>Sign in with Google</button>
                  </div>
                  <form>
                        <input type="email" placeholder='Your Email' />
                        <br />
                        <input type="password" name="" id="" placeholder='Password' />
                        <br />
                        <input type="submit" value="Login" />
                  </form>
            </div>
      );
};

export default Login;