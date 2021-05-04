import React, { useState, useEffect } from "react";
import axios from "axios";


const FetchUser = ({ method, bareurl }) => {
  const [users, setUsers] = useState([]);
  const [isStudent, setIsStudent] = useState(false)

  const fetchStudent = async ({ method }) => {
    try{
    const response = await axios.get(`${bareurl}${method}`);
    setUsers(response.data);
    if(response.data){
        
    }
  }catch(error){
    console.log(error.messsage)
  }
  };

  useEffect(() => {
      fetchStudent(method)
  }, [method])

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


