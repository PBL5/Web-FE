import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './StartCam.css';

const StartCam = () => {
  const [finish, setFinish] = useState(false);

  // get status, if finished --> then get status to redirect to fetch students
  const handleStart = async () => {
    try {
      const response = await axios.get('');
      setFinish(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleStart();
  }, []);

  if (finish) {
    return <Redirect to='/fetchstudents' />;
  }

  return (
    <div className='form'>
      <button className='big-button' onClick={handleStart}>
        Start
      </button>
    </div>
  );
};

export default StartCam;
