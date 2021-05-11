import React, { useState } from 'react';
import './index.css';
import {
  apiRequest,
  GET,
  LOGIN_ENTRY_POINT,
  POST
} from '../../../utils/apiRequest';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../utils/actions/auth.action';
import { useHistory } from 'react-router';

const SignIn = ({ submitForm }) => {
  const [signedIn, setSignedIn] = useState(false);
  const [dataSignIn, setDataSignIn] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState({
    emailError: '',
    passwordError: ''
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setDataSignIn({
      ...dataSignIn,
      [e.target.name]: e.target.value
    });
  };

  const handleSignin = async (e) => {
    e.preventDefault();

    const payload = { ...dataSignIn };
    const result = await apiRequest(LOGIN_ENTRY_POINT, 'post', payload);

    dispatch(setUser(result.data));
    history.push('/');
  };

  if (signedIn) {
    window.location.href = '/';
    return;
  }

  return (
    <div className='form-content'>
      <form className='form' onSubmit={handleSignin}>
        <div className='form-inputs'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            id='email'
            type='text'
            name='email'
            className='form-input'
            placeholder='Email'
            value={dataSignIn.email}
            onChange={handleChange}
          />
          {/* errors.email is true --> run <p> */}
          {error.emailError && <p>{error.emailError}</p>}
        </div>

        <div className='form-inputs'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            id='password'
            type='password'
            name='password'
            className='form-input'
            placeholder='Password'
            value={dataSignIn.password}
            onChange={handleChange}
          />
          {error.passwordError && <p>{error.passwordError}</p>}
        </div>
        <button className='form-input-btn' type='submit' onClick={handleSignin}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignIn;

/* nếu sign in success thì truyền props cho Navbar: signin = true để thay đổi các element của navbar
    - thêm phần: Studentlist, username, signout;  bỏ phần sign in/up.
    */
// get data from backend --> auth user, setSignin = true --> send to Navbar
// get value from field --> check
