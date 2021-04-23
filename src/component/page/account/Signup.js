import './Signup.css'
import useForm  from './useForm'
import validate from './validateInput'

function Signup({submitForm}) {
    const {handleChange, values, handleSubmit, errors}  = useForm({submitForm, validate})
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
                <label htmlFor = 'fullname' 
                className = 'form-label' 
                >Fullname</label>
                <input 
                id = 'fullname'
                type = 'text' 
                name = 'fullname' 
                className = 'form-input'
                placeholder = 'Fullname'
                value = {values.fullname}
                onChange = {handleChange}/>
                {errors.fullname && <p>{errors.fullname}</p>}
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
            <div className = 'form-inputs'>
                <label htmlFor = 'confirm_password' 
                className = 'form-label' 
                >Confirm password</label>
                <input 
                id = 'confirm_password'
                type = 'password' 
                name = 'confirm_password' 
                className = 'form-input'
                placeholder = 'Confirm password'
                value = {values.confirm_password}
                onChange = {handleChange}/>
                {errors.confirm_password && <p>{errors.confirm_password}</p>}
            </div>
            {/* submit oke --> go to login page --> login ok  --> changr navigation element --> + signout + fullname */}
            <button className = 'form-input-btn'
            type = 'submit'
            >Sign up
            </button>
            <span className = 'form-input-login'>
                Already have an account? <a href = "/signin">Login</a>
            </span>
        </form>
    </div>
    )
}
export default Signup

