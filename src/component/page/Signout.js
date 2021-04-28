import React from 'react'
import Home from '../common/home/Home'

const Signout = ({setSignin}) => {
    const setSignout = setSignin

    return (
       <Home setSignin = {setSignout} />
    )
}

export default Signout
