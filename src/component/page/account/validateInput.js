 
 // check error
 export default function validateInput(values) {

     let errors = {}
     
     if(!values.fullname){
        errors.fullname = 'Fullname required'
    }

     if(!values.email){
         errors.email = 'Email required'
     }else if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)){
        errors.email = 'Email address is invalid'
     }

     if(!values.password){
        errors.password = 'Password required'
    }else if(values.password.length < 8){
        errors.password = 'The minimum is 8 characters'
    }

    if(!values.confirm_password){
        errors.confirm_password = 'Password is required'
    }else if(values.password !== values.confirm_password){
        errors.password = 'Passwords do not match'
    }

    return errors
 }