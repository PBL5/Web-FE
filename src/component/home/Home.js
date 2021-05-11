import React from 'react';
import './Home.css';

function Home() {
  // setSignin: prop nhận từ signin: nếu đã signin thì home không hiển thị 2 button: Signin và Watchtutorial

  return (
    <div className='home-container'>
      {/* <img alt = "cc" src = {purplesky}></img> */}
      <h1>Face Recognition</h1>
      <p>18TCLC_DT3</p>
    </div>
  );
}

export default Home;
