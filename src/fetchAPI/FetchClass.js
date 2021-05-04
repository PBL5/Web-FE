import React, {useState, useEffect} from 'react'
import axios from 'axios'

const FetchClass = ({method, bareurl }) => {
    const [classes, setClasses] = useState([])
    
    const fetchClasses = async({method})=>{
        try{
            const response = await axios.get(`${bareurl}${method}`)
            setClasses(response.data)
        }catch(error){
            console.log(error.message)
        }
    }
    
    useEffect(() => {
       fetchClasses(method)
    }, [method])

    return classes
}

export default FetchClass
