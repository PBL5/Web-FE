import React from 'react'
import Home from '../Home'

const Signout = ({setSignin}) => {
    const setSignout = setSignin

    return (
       <Home setSignin = {setSignout} />
    )
}

export default Signout
