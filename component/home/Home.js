import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className = {styles.heroContainer}>
    {/* <Navbar /> */}
    <div className = {styles.heroContent}>
        <div className = {styles.heroItems}>
            <h1>Face Recognition</h1>
            <p>We are all ready for you</p>
            <a href = '/aboutus/aboutus'><button className = {styles.heroButton}>About us</button></a>
        </div>
    </div>
</div>
    // <div className={styles.homeContainer}>
    //   <h1>Face Recognition</h1>
    //   <p>18TCLC_DT3</p>
    // </div>
  );
}

export default Home;
