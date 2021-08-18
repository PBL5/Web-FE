import React from 'react';
import SearchClass from './components/searchClass/index';
import SearchField from './components/searchField/index';
import StudentsTable from './components/studentTable/index';
import styles from './index.module.css';

function StudentsList() {
  return (
    <div className={styles.container}>
      <div className={styles.mainBar}>
        <SearchClass />
        <StudentsTable />
      </div>
      <SearchField />
    </div>
  );
}

export default StudentsList;
