import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Table, Button, Modal, message } from 'antd';

import styles from './index.module.css';
import UpdateStudentInformation from '../updateStudent/index';

const StudentsTable = () => {
  const { studentsOfClass } = useSelector((state) => state.studentProps);
  const [visible, setVisible] = useState(false);
  const [selectedInfo, setSeletecStudentInfo] = useState(null);

  const column = [
    {
      title: 'Student ID',
      dataIndex: 'user_id',
      key: 'user_id'
    },
    {
      title: 'Full name',
      dataIndex: 'full_name',
      key: 'full_name'
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
    },
    {
      title: 'Is attending?',
      dataIndex: 'attendingStatus',
      key: 'attendingStatus'
    }
  ];

  const onSubmit = () => {
    message.info('Checked!');
  };

  const formattedStudentList = studentsOfClass.map((student) => ({
    ...student,
    attendingStatus: student.attendanceStatus ? 'Yes' : 'No'
  }));

  return (
    <div className={styles.studentslist}>
      <div className={styles.table}>
        <Table
          dataSource={formattedStudentList}
          columns={column}
          onRow={(studentInfo) => {
            return {
              onClick: () => {
                setVisible(true);
                setSeletecStudentInfo(studentInfo);
              }
            };
          }}
        />
      </div>
      <Modal
        title="Update student's information"
        visible={visible}
        footer={[
          <Button type='primary' key='submit' onClick={() => onSubmit()}>
            Update
          </Button>,
          <Button key='back' onClick={() => setVisible(false)}>
            Cancel
          </Button>
        ]}
      >
        <UpdateStudentInformation studentInfo={selectedInfo} />
      </Modal>
    </div>
  );
};

export default StudentsTable;
