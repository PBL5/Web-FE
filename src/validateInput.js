const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

const validateInput = (data, fields = []) => {
  let errors = {};

  for (const field of fields)
    if (!data[field] || data[field] === '') {
      const messageError = `${capitalizeFirstLetter(field)} must not be empty`;
      errors[`${field}Error`] = messageError;
    }

  if (fields.includes('email')) {
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if (!regex.test(data.email)) errors.emailError = 'Email is invalid';
  }

  if (fields.includes('password') && data.password.length < 3)
    errors.passwordError = "Password's length must be more than 3";

  return errors;
};

export default validateInput;
