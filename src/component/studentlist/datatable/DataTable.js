import React from "react";
import Pagination from "./pagination/Pagination";

const DataTable = ({ students }) => {
  // heading- tên mỗi cột
  const columns = students[0] && Object.keys(students[0]);

  return (
    <>
      <table cellPadding={0} cellSpacing={0}>
        <thread>
          {/* student là 1 mảng, phần tử đầu tiên là header, dùng map để show header thành mỗi label- tên cột trong bảng */}
          <tr>{students[0] && columns.map((label) => <th>{label}</th>)}</tr>
        </thread>
        <tbody>
          {students.map((row) => (
            <tr>
              {columns.map((cols) => (
                <td>{row[cols]}</td>
              ))}
              <input type="checkbox" name="attendStudent"></input>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Pagination />
    </>
  );
};

export default DataTable;
/*
- 1 có trường checkbox hoặc hiển thị luôn ds có mặt; 
- button điểm danh  --> server --> rasp --> api đẩy lên lại FE; 
-   {/*- những phần tử tiếp theo là giá trị infor của 1 student, students map đến phần tử đó, 
            - mỗi phần tử lại map đến từng phần tử hàng đó
            - giống như mảng 2 chiều, mà mỗi hàng là 1 mảng con  
*/
