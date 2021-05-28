
export default function validateInput(dataSignIn) {

    let errors = {}

    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(!dataSignIn.email){
        errors.emailError = 'Email required'
    }else if(!regex.test(dataSignIn.email)){
       errors.emailError = 'Email address is invalid'
    }

    if(!dataSignIn.password){
       errors.passwordError = 'Password required'
   }else if(dataSignIn.password.length < 3){
       errors.passwordError = 'The minimum is 3 characters'
   }

   if(!dataSignIn.gender){
       errors.genderError = 'Empty gender'
   }

    if(dataSignIn.dob === ''){
        errors.dobError = 'Empty date of birth'
    }

    if(!dataSignIn.full_name){
        errors.fullnameError = 'Empty full name'
    }

   return errors
}