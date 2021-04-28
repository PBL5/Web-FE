import React from 'react'
import axios from 'axios'


    
   const FetchStudent =(bareurl, apiurl, method, students = []) =>{
       return axios({
           method: method,
           apirurl: `${bareurl}${apiurl}`,
           data: students,
           stricSSL: false

       })
   }


    export default FetchStudent
