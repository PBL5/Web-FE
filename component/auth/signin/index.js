import { Modal, Button } from 'antd';
import React, { useState } from 'react';
import { apiRequest, LOGIN_ENTRY_POINT, POST } from 'src/utils/apiRequest';
import 'antd/dist/antd.css';
import styles from './index.module.css';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setUser } from 'src/actions/auth.action';
import validateInput from 'src/validateInput';

const SignIn = () => {
  const [dataSignIn, setDataSignIn] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: ''
  });
  const [dialogMessage, setDialogMessage] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = ({ target: { name, value } }) => {
    setDataSignIn({ ...dataSignIn, [name]: value });
  };

  const handleSignin = async (e) => {
    e.preventDefault();

    const validateResult = validateInput(dataSignIn, ['email', 'password']);
    setErrors(validateResult);

    if (Object.keys(validateResult).length > 0) return;

    try {
      const result = await apiRequest(LOGIN_ENTRY_POINT, POST, dataSignIn);
      dispatch(setUser(result.data));
      router.push('/');
    } catch (err) {
      setDialogMessage(err.response.data);
    }
  };

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
        </div>

        <button
          className={styles.formInputBtn}
          type='submit'
          onClick={handleSignin}
        >
          Sign in
        </button>
      </form>
      <Modal
        visible={dialogMessage !== ''}
        width='300px'
        footer={
          <div className={styles.wrapDialogFooter}>
            <Button type='primary' onClick={() => setDialogMessage('')}>
              OK
            </Button>
          </div>
        }
      >
        <p>{dialogMessage}</p>
      </Modal>
    </div>
  );
};

export default SignIn;
