import React from 'react';
import styles from './index.module.css';
import SearchClass from './components/searchClass';
import StudentsTable from './components/studentTable';

function StudentsList() {
  return (
    <div className={styles.root}>
      <SearchClass />
      <StudentsTable />
    </div>
  );
}

export default StudentsList;
