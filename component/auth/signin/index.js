import React, { useState } from 'react';
import styles from './index.module.css';
import validateInput from './handleform/validateInput';
import handleForm from './handleform/handleForm';

const SignIn = () => {

  const [signedIn, setSignedIn] = useState(false);
 
  const {handleChange, dataSignIn, handleSignin, errors, handleAddStudents} = handleForm({validateInput})

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
          {errors.emailError && <p>{errors.emailError}</p>}
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
          {errors.passwordError && <p>{errors.passwordError}</p>}
          {errors.both && <p>{errors.both}</p>}
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
