import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { Table, Button, Modal, message } from 'antd';

import styles from './index.module.css';
import UpdateStudentInformation from '../updateStudent/index';

const PAGE_SIZE = 5;

const StudentsTable = () => {
  const { studentsOfClass } = useSelector((state) => state.studentProps);

  const [posts, setPosts] = useState();
  const pagi = _(studentsOfClass).slice(0).take(PAGE_SIZE).value();
  const [paginatedPosts, setPaginatedPosts] = useState(pagi);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setPaginatedPosts(_(studentsOfClass).slice(0).take(PAGE_SIZE).value());
    setPosts(studentsOfClass);
  }, [studentsOfClass]);

  const columns = paginatedPosts[0] && Object.keys(paginatedPosts[0]);

  const labelCols = [
    'Student ID',
    'Full name',
    'Email',
    'Role',
    'Gender',
    'Date of birth',
    'Is attendant'
  ];

  const pageCount = posts ? Math.ceil(posts.length / PAGE_SIZE) : 0;

  //if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * PAGE_SIZE;
    const paginatedPost = _(posts).slice(startIndex).take(PAGE_SIZE).value();
    setPaginatedPosts(paginatedPost);
  };

  const dataSource = [
    {
      user_id: 10,
      fullname: 'Trang1',
      email: 'trang@pbl5.net',
      user_type: 'Student',
      gender: 'female',
      birthday: '2000-01-01'
    },
    {
      user_id: 10,
      fullname: 'Trang2',
      email: 'trang@pbl5.net',
      user_type: 'Student',
      gender: 'female',
      birthday: '2000-01-01'
    },
    {
      user_id: 10,
      fullname: 'Trang3',
      email: 'trang@pbl5.net',
      user_type: 'Student',
      gender: 'female',
      birthday: '2000-01-01'
    }
  ];
  const [visible, setVisible] = useState(false);
  const [studentData, setstudentData] = useState(null);

  const column = [
    {
      title: 'Student ID',
      dataIndex: 'user_id',
      key: 'user_id'
    },
    {
      title: 'Full name',
      dataIndex: 'fullname',
      key: 'fullname'
    },
    {
      title: 'User type',
      dataIndex: 'user_type',
      key: 'user_type'
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      key: 'birthday'
    }
  ];

  const onSubmit = () => {
    message.info('Checked!');
  };

  return (
    <div className={styles.studentslist}>
      <div className={styles.table}>
        <Table
          dataSource={dataSource}
          columns={column}
          onRow={(record) => {
            return {
              onClick: () => {
                setVisible(true);
                setstudentData(record);
              }
            };
          }}
        />
      </div>
      <Modal
        title='Hand check'
        visible={visible}
        footer={[
          <Button type='primary' key='submit' onClick={() => onSubmit()}>
            Check
          </Button>,
          <Button key='back' onClick={() => setVisible(false)}>
            Cancel
          </Button>
        ]}
      >
        <UpdateStudentInformation record={studentData} />
      </Modal>
    </div>
  );
};

export default StudentsTable;
