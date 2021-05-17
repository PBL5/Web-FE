import React, { useState } from 'react';
import styles from './index.module.css';
import { apiRequest, GET, LOGIN_ENTRY_POINT, POST } from 'src/utils/apiRequest';
import { useDispatch } from 'react-redux';
import { setUser } from 'src/actions/auth.action';
import { useRouter } from 'next/router'

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
  const router = useRouter();

  const handleChange = (e) => {
    setDataSignIn({
      ...dataSignIn,
      [e.target.name]: e.target.value
    });
  };

  const handleSignin = async (e) => {
    e.preventDefault();

    const payload = { ...dataSignIn };
    const result = await apiRequest(LOGIN_ENTRY_POINT, POST, payload);

    dispatch(setUser(result.data));
    router.push('/');
  };

  if (signedIn) {
    window.location.href = '/';
    return;
  }

  return (
    <div className={styles.formContent}>
      <form className={styles.form} onSubmit={handleSignin}>
        <div className={styles.formInputs}>
          <label htmlFor='email' className={styles.formLabel}>
            Email
          </label>
          <input
            id='email'
            type='text'
            name='email'
            className={styles.formInput}
            placeholder='Email'
            value={dataSignIn.email}
            onChange={handleChange}
          />
          {error.emailError && <p>{error.emailError}</p>}
        </div>

        <div className={styles.formInputs}>
          <label htmlFor='password' className={styles.formLabel}>
            Password
          </label>
          <input
            id='password'
            type='password'
            name='password'
            className={styles.formInput}
            placeholder='Password'
            value={dataSignIn.password}
            onChange={handleChange}
          />
          {error.passwordError && <p>{error.passwordError}</p>}
        </div>
        <button
          className={styles.formInputBtn}
          type='submit'
          onClick={handleSignin}
        >
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
