import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const StudentsTable = () => {

  const { students } = useSelector((state) => state.studentProps);
  // const columns = students[0] && Object.keys(students[0]);
  console.log('student', students)

  return (
    <div> cc</div>
  )

};

export default StudentsTable;

