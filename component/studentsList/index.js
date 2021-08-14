import React from 'react';
import styles from './index.module.css';
import SearchClass from './components/searchClass';
import StudentsTable from './components/studentTable';
import SearchField from './components/searchField';

function StudentsList() {
  return (
    <div className={styles.listContainer}>
      <div className={styles.listContent}>
        <div className={styles.list}>
          <SearchClass />
          <StudentsTable />
        </div>
      </div>
      <SearchField />
    </div>
  );
}

export default StudentsList;
