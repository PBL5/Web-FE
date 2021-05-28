
export default function validateInput(dataSignIn) {

    let errors = {}

//[0-9]+@[a-zA-Z]+\.[a-zA-Z] + \.[a-zA-Z]; [a-zA-Z0-9]+@sv\.dut\.vn; ~^[a-zA-Z_-]+@gmail\.co\.uk$~
    if(!dataSignIn.email){
        errors.emailError = 'Email required'
    }else if(!/^[0-9]@(dut)\.(udn)\.(vn)+$/.test(dataSignIn.email)){
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