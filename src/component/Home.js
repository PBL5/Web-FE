import React from 'react'
import {Button} from './Button'
import './Home.css'
import './Button.css'

import purplesky from '../images/purplesky_1.jpg'


function Home({setSignin}) {
    // setSignin: prop nhận từ signin: nếu đã signin thì home không hiển thị 2 button: Signin và Watchtutorial
    
    return (
        <div className = 'home-container'>
            <img alt = "cc" src = {purplesky}></img>
            <h1>Face Recognition</h1>
            <p>18TCLC_DT3</p>
{
    !setSignin  &&
            <div className = 'home-btns'>
                <Button className = 'btns' 
                buttonStyle = 'btn--outline' 
                buttonSize= 'btn--large'
                path= '/signin'
                >Sign in</Button>

                <Button className = 'home-btns' 
                buttonStyle = 'btn--primary' 
                buttonSize= 'btn--large'
                path='/video'
                >Watch tutorial<i className= 'far fa-play-circle'/></Button>
            </div>}

        </div>
    )
}

export default Home
