import React, {useState} from 'react'
import './Signup.css'
import validate from '../handleForm/validateInput'
import useForm  from '../handleForm/useForm'

function Signin({submitForm}) {
    const {handleChange, values, handleSubmit, errors}  = useForm({submitForm, validate})
    /* nếu sign in sucess thì truyền props cho Navbar: signin = true để thay đổi các element của navbar
    - thêm phần: Studentlist, username, signout;  bỏ phần sign in/up.
    */
   const [signin, setSignin] = useState(false)

   // get data from backend --> auth user, setSignin = true --> send to Navbar
   // get value from field --> check
   const handleSignin= () =>{

   }
    return (
        <div className = 'form-content'>
        <form className = 'form' onSubmit = {handleSubmit}>
            <div className = 'form-inputs'>
                <label htmlFor = 'email' 
                className = 'form-label' 
               >Email</label>
                <input 
                id = 'email'
                type = 'text' 
                name = 'email' 
                className = 'form-input'
                placeholder = 'Email'
                value = {values.email}
                onChange = {handleChange}/>
                {/* errors.email is true --> run <p> */}
                {errors.email && <p>{errors.email}</p>}
            </div>
           
            <div className = 'form-inputs'>
                <label htmlFor = 'password' 
                className = 'form-label' 
                >Password</label>
                <input 
                id = 'password'
                type = 'password' 
                name = 'password' 
                className = 'form-input'
                placeholder = 'Password'
                value = {values.password}
                onChange = {handleChange}/>
                {errors.password && <p>{errors.password}</p>}
            </div>

            {/* login ok --> change navigation status --> + signout + fullname*/}
            
            <button className = 'form-input-btn'
            type = 'submit'
            onClick = {handleSignin}
            >Sign in
            </button>
        </form>
    </div>
    )
}
export default Signin