import React, { useState, useEffect } from "react";
import axios from "axios";


const FetchUser = ({bareurl }) => {
  const [users, setUsers] = useState([]);
  const [isStudent, setIsStudent] = useState(false)

  const fetchStudent = async () => {
    try{
    const response = await axios.get(`${bareurl}/user`);//user
    setUsers(response.data);
    // check role, condition: temporary true 
    if(true){
        setIsStudent(true)
    }
  }catch(error){
    console.log(error.messsage)
  }
  };

  useEffect(() => {
      fetchStudent(bareurl)
  }, [bareurl])

  return users

  /*
   const FetchStudent =(bareurl, apiurl, method, students = []) =>{
       return axios({
           method: method,
           apirurl: `${bareurl}${apiurl}`,
           data: students,
           stricSSL: false

       })
   }
   */
};

export default FetchUser ;


