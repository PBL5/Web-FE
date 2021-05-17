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

  const fetchStudent = async () => {
    try {
      const response = await axios.get(`${'bareurl'}/user`); //user
      setStudents(response.data);
      // check role, condition: temporary true
      setIsStudent(true);
    } catch (error) {
      console.log(error.messsage);
    }
  };
  const fetchClasses = async () => {
    try {
      const response = await axios.get(`${'bareurl'}/class`);
      setClasses(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchStudent('bareurl');
    fetchClasses('bareurl');
  }, []);

  function searchStudents(rows) {
    return rows.filter((row) =>
      searchCols.some(
        (col) =>
          row[col].toString().toLowerCase().indexOf(searchValue.toLowerCase()) >
          -1
      )
    );
  }

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

/* handleSearchField
    - tìm kiếm sinh viên theo các label, check vào label muốn tìm
    - check and uncheck
    - searchCols là mảng chứa những label tìm kiếm, ví dụ tìm theo firstName, lastName, ..
    - ...prevState chứa tất cả những giá trị đó, kiểm tra xem checkbox có đc check hay không để remove nó ra khỏi mảng
    */

/* searchStudent
       - return all the rows matching with the input value
       - giá trị cái cột có khi là kiểu số nên phải cast về String, vì giá trị của searchField là text 
       - cast toLowercase 2 vế so sánh, không thì tìm không ra
       - met moi vl vay :) dep di
       */

/*
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((result) => setStudents(result));
  }, []);
  */
