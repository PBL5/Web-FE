import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './index.module.css';
import StudentsTable from './list';

function StudentsList() {
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [isStudent, setIsStudent] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchCols, setSearchCols] = useState([]);
  const [classOption, setClassOption] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);

  // search field
  const handleSearchField = (col) => {
    const checked = searchCols.includes(col);
    setSearchCols((prev) =>
      checked ? prev.filter((searchC) => searchC !== col) : [...prev, col]
    );
  };

  // handle when choose option
  const handleClassOption = (e) => {
    setClassOption(e.target.value);
  };

  // handle event when click submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };

  const columns = students[0] && Object.keys(students[0]);

  return (
    <>
      <div className={styles.root}>
        <form onSubmit={handleSubmit} className={styles.showForm}>
          <label className={styles.showFormLabel}>
            Choose class to show students list
            {classes &&
              classes.map((perClass, key) => (
                <select
                  value='Choose class'
                  onChange={handleClassOption}
                  key={key}
                >
                  <option value={perClass}>{perClass}</option>
                </select>
              ))}
          </label>
          <button className={styles.showFormButtonShow} type='submit'>
            Show
          </button>
          <br />
          <label className={styles.showFormLabel}>Search students</label>
          <input
            type='text'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className={styles.showFormInput}
          />
          {columns &&
            columns.map((col, key) => (
              <label className={styles.showFormLabel} key={key}>
                <input
                  className={styles.showFormInputCheckbox}
                  type='checkbox'
                  checked={searchCols.includes(col)}
                  onChange={() => {
                    handleSearchField(col);
                  }}
                />
                {col}
              </label>
            ))}
        </form>
      </div>
      {/*<div>
        {isSubmit && isStudent && (
          <div>
            <StudentsTable students={searchStudents(students)} />
          </div>
        )}
      </div>*/}
    </>
  );
}

export default StudentsList;
