import React from 'react';

const StudentListPage = ({ students }) => {
  const columns = students[0] && Object.keys(students[0]);
  return (
    <>
      <table cellPadding={0} cellSpacing={0}>
        <thread>
          <tr>
            {students[0] &&
              columns.map((label, index) => <th key={index}>{label}</th>)}
          </tr>
        </thread>
        <tbody>
          {students.map((row, index) => (
            <tr key={index}>
              {columns.map((cols, index) => (
                <td key={index}>{row[cols]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </>
  );
};

export default StudentListPage;
/*
-   {/*- những phần tử tiếp theo là giá trị infor của 1 student, students map đến phần tử đó, 
            - mỗi phần tử lại map đến từng phần tử hàng đó
            - giống như mảng 2 chiều, mà mỗi hàng là 1 mảng con  
*/
/* student là 1 mảng, phần tử đầu tiên là header, dùng map để show header thành mỗi label- tên cột trong bảng */
