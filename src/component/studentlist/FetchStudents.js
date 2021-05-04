import React, { useState, useEffect } from "react";
import DataTable from "./datatable/DataTable";
import FetchUser from "../../fetchAPI/FetchUser";
import FetchClass from "../../fetchAPI/FetchClass";

function FetchStudents() {
  // const [students, setStudents] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchCols, setSearchCols] = useState([]);
  const [classOption, setClassOption] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false)

  const { students } = FetchUser(
    "https://my-json-server.typicode.com/typicode/demo/posts"
  );
  const { classes } = FetchClass("bareurl");
  // use for pagination
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    totalRows: students.length,
  });

  function searchStudents(rows) {
    return rows.filter((row) =>
      searchCols.some(
        (col) =>
          row[col].toString().toLowerCase().indexOf(searchValue.toLowerCase()) >
          -1
      )
    );
  }

  const handleSearchField = (col) => {
    const checked = searchCols.includes(col);
    setSearchCols((prev) =>
      checked ? prev.filter((searchC) => searchC !== col) : [...prev, col]
    );
  };

  const handleClassOption = (e) => {
    setClassOption(e.target.value);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true)
  };

  const columns = students[0] && Object.keys(students[0]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Choose class to show students list
          {classes &&
            classes.map((perClass) => (
              <select value="Choose class" onChange={handleClassOption}>
                <option value={perClass}>{perClass}</option>
              </select>
            ))}
        </label>
        <input type = 'submit' value = 'Show'/>
      </form>
      <div>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {columns &&
          columns.map((col) => (
            <label>
              <input
                type="checkbox"
                checked={searchCols.includes(col)}
                onChange={() => {
                  handleSearchField(col);
                }}
              />
              {col}
            </label>
          ))}
      </div>
{
      isSubmit && 
      <div>
        <DataTable students={searchStudents(students)} />
      </div> 
      }
    </div>
  );
}

export default FetchStudents;

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
