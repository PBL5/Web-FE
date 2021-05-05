import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchClass = ({ bareurl }) => {
  const [classes, setClasses] = useState([]);

  const fetchClasses = async () => {
    try {
      const response = await axios.get(`${bareurl}/class`);
      setClasses(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchClasses(bareurl);
  }, []);

  return classes;
};

export default FetchClass;
