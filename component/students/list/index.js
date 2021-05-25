import React, { useEffect, useState } from 'react';

const StudentsTable = ({ students }) => {


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

export default StudentsTable;
