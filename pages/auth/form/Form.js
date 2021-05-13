import React, { useState } from 'react';
import Signup from '../Signup';
import Homepage from '../../Homepage';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div>
      <Signup />
      {!isSubmitted ? <Signup submitForm={submitForm} /> : <Homepage />}
    </div>
  );
};

export default Form;
