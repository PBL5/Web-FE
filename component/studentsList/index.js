import React from 'react';
import styles from './index.module.css';
import SearchClass from './components/searchClass';
import StudentsTable from './components/studentTable';
import SearchFieldComp from './components/SearchFieldComp';

function StudentsList() {
  return (
    <div className={styles.listContainer}>
      <div className={styles.listContent}>
        <div className={styles.list}>
          <SearchClass />
          <StudentsTable />
        </div>
      </div>
      <SearchFieldComp />
    </div>
  );
}

export default StudentsList;
