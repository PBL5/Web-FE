import React, { useState, useEffect } from "react";
import DataTable from "./datatable/DataTable";
import FetchUser from "../../fetchAPI/FetchUser";

function FetchStudents() {
  // const [students, setStudents] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchCols, setSearchCols] = useState([]);

  const { students } = FetchUser('bareurl');
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

  const columns = students[0] && Object.keys(students[0]);
  return (
    <div>
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
      <div>
        <DataTable students={searchStudents(students)} />
      </div>
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
    */

// fetch data from BE, http://time.jsontest.com
/*
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((result) => setStudents(result));
  }, []);
  */
