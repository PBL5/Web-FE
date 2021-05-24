import {useState} from 'react'
import { apiRequest, GET, LOGIN_ENTRY_POINT, POST } from 'src/utils/apiRequest';
import { useDispatch } from 'react-redux';
import { setUser } from 'src/actions/auth.action';
import { useHistory } from 'react-router';
import validateInput from './validateInput';
import {useRouter} from 'next/router'

const handleForm = () =>{
    const [dataSignIn, setDataSignIn] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({
      emailError: '',
      passwordError: '',
      both: '',
    })

    const dispatch = useDispatch();
    const history = useHistory();
    const router = useRouter();

    const handleChange = (e) => {
      const {name, value} = e.target
      setDataSignIn({
          ...dataSignIn,
          [name]: value
      })
      };
      // const {valid} = validateInput({dataSignIn})
      
      const handleSignin = async (e) => {
        e.preventDefault();
        setErrors(validateInput(dataSignIn))

        console.log('email error', errors.emailError)
        console.log('password error', errors.passwordError)
        
        console.log('email', dataSignIn.email)
        console.log('password', dataSignIn.password)

        if((dataSignIn.email === '') || (dataSignIn.password === '')){
          // setErrors({
          //   emailError: '',
          //   passwordError: ''
          // })
        }
        else{
        try{
        const payload = { ...dataSignIn };
        const result = await apiRequest(LOGIN_ENTRY_POINT, 'post', payload);
        dispatch(setUser(result.data));
        router.push('/students/list');
        }catch(error){
          setErrors({
            // emailError: 'Email is Incorrect',
            // passwordError: 'Password is Incorrect',
            both: 'Email or Password is Incorrect'
          })
        }
      }
        
      };
    
    return {handleChange, dataSignIn, handleSignin, errors}
}
export default handleForm