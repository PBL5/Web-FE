import React from 'react';
import { useSelector } from 'react-redux';
import styles from './searchClass.module.css'

const SearchClass = () => {
  const { classes } = useSelector((state) => state.studentProps);

  const handleGetStudentOfClass = async () => {
  }

  return (
    <div>
      <div className={styles.title}>Select class</div>
      <div>
        <select>
          {classes.map((element, key) => (
            <option key={key}>{element.subject.subject_name}</option>
          ))}
        </select>
      </div>
      <button onClick={handleGetStudentOfClass}>Show</button>
    </div>
  );
};

export default SearchClass;
