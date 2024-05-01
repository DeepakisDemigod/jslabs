import React from 'react';
import { auth, provider } from '../config/firebase.js';
import { signInWithPopup } from 'firebase/auth';
import { SignIn } from 'phosphor-react';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Auth = props => {
  const { setIsAuth } = props;
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set('auth-token', result.user.refreshToken);
      console.log(result);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <button
        className='p-0 m-0 flex items-center justify-center gap-1 btn-xs'
        onClick={signInWithGoogle}
      >
        <SignIn size={16} />
        <span>sign-in</span>
      </button>
    </div>
  );
};

export default Auth;
