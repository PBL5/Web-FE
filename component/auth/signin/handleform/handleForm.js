import { useState } from 'react';
import {
  ADD_STUDENT_ENTRY_POINT,
  apiRequest,
  GET,
  LOGIN_ENTRY_POINT,
  POST
} from 'src/utils/apiRequest';
import { useDispatch } from 'react-redux';
import { setUser } from 'src/actions/auth.action';
// import { addStudents } from 'src/actions/students.action';
import validateInput from './validateInput';
import { useRouter } from 'next/router';
import { setIsLoading } from 'src/actions/common.action';

const handleForm = () => {
  const defaultState = {
    email: '',
    password: '',
    full_name: '',
    gender: '',
    dob: ''
  };
  const [dataSignIn, setDataSignIn] = useState(defaultState);

  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: '',
    both: '',
    genderError: '',
    dobError: '',
    fullnameError: ''
  });

  const [openSuccessfulDialog, setOpenSuccessulDialog] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataSignIn({
      ...dataSignIn,
      [name]: value
    });
  };
  // const {valid} = validateInput({dataSignIn})

  const handleSignin = async (e) => {
    e.preventDefault();
    setErrors(validateInput(dataSignIn));

    if (dataSignIn.email === '' || dataSignIn.password === '') {
      // setErrors({
      //   emailError: '',
      //   passwordError: ''
      // })
    } else {
      try {
        const payload = { ...dataSignIn };
        const result = await apiRequest(LOGIN_ENTRY_POINT, 'post', payload);
        dispatch(setUser(result.data));
        router.push('/');
      } catch (error) {
        setErrors({
          // emailError: 'Email is Incorrect',
          // passwordError: 'Password is Incorrect',
          both: 'Email or Password is Incorrect'
        });
      }
    }
  };

  const handleAddChange = (e) => {
    let { name, value } = e.target;

    // dispatch(addStudents());
  };

  const handleAddStudents = async (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true));
    const errors = validateInput(dataSignIn);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      const payload = {
        ...dataSignIn,
        birthday: dataSignIn.dob
      };
      await apiRequest(ADD_STUDENT_ENTRY_POINT, POST, payload);
    }
    dispatch(setIsLoading(false));
    setOpenSuccessulDialog(true);
  };

  const handleClear = (e) => {
    setDataSignIn(defaultState);
  };

  return {
    handleChange,
    dataSignIn,
    handleSignin,
    errors,
    handleAddStudents,
    handleClear,
    setOpenSuccessulDialog,
    openSuccessfulDialog
  };
};
export default handleForm;
