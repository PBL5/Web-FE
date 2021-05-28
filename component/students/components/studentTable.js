import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './studentsTable.module.css';
import _ from 'lodash';
import clsx from 'clsx';

const pagesize = 5;
const StudentsTable = () => {
  const { studentsOfClass } = useSelector((state) => state.studentProps);

  console.log('students of class', studentsOfClass);

  const [posts, setPosts] = useState();
  const pagi = _(studentsOfClass).slice(0).take(pagesize).value();
  console.log('pagi', pagi);
  const [paginatedPosts, setPaginatedPosts] = useState(pagi);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setPaginatedPosts(_(studentsOfClass).slice(0).take(pagesize).value());
    setPosts(studentsOfClass);
  }, [studentsOfClass]);

  const columns = paginatedPosts[0] && Object.keys(paginatedPosts[0]);

  console.log('pagination posts', paginatedPosts);
  console.log('posts', posts);
  console.log('cols', columns);

  const labelCols = [
    'Student ID',
    'Full name',
    'Email',
    'Role',
    'Gender',
    'Date of birth'
  ];

  const pageCount = posts ? Math.ceil(posts.length / pagesize) : 0;
  console.log('page count', pageCount);

  //if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pagesize;
    const paginatedPost = _(posts).slice(startIndex).take(pagesize).value();
    setPaginatedPosts(paginatedPost);
    console.log('pageNo', pageNo);
    console.log('start index', startIndex);
    console.log('set pagi', paginatedPosts);
    console.log('current page', currentPage)
  };

  return (
    <div className={styles.studentslist}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            {paginatedPosts[0] &&
              labelCols.map((label, index) => (
                <th className={styles.th} key={index}>
                  {label}
                </th>
              ))}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {paginatedPosts.map((row, index) => (
            <tr key={index}>
              {columns.map((cols, index) => (
                <td className={styles.td} key={index}>
                  {row[cols]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className={styles.paginationContainer}>
          {/* <p>prev</p> */}
          {pages.map((page, key) => (
            <li
              key={key}
              className = {styles.paginationNumber}
              
            >
              <p  className = {styles.paginationNumber} onClick={() => pagination(page)}>
                {page}
              </p>
            </li>
          ))}
          {/* <p>pre</p> */}
        </ul>
      </nav>
    </div>
  );
};

export default StudentsTable;