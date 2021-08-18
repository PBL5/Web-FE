import React, { useState } from 'react';
import { Form, Input, Modal, Button, DatePicker, Radio, message } from 'antd';
import moment from 'moment';

const AddStudentToClass = (props) => {
  const [studentData, setStudentData] = useState({
    studentID: '',
    fullname: '',
    birthday: '',
    gender: ''
  });
  const onSaveAddStudent = () => {
    message.info('Added');
    console.log(studentData);
  };
  const handleInputChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Modal
      title='Add Student to class'
      visible={props.addStudentVisible}
      footer={[
        <Button key='back' onClick={() => props.setAddStudentVisible(false)}>
          Cancel
        </Button>,
        <Button
          key='submit'
          type='primary'
          htmlType='submit'
          onClick={onSaveAddStudent}
        >
          Save
        </Button>
      ]}
    >
      <Form name='addstudent'>
        <Form.Item
          name='studentID'
          label='Student ID'
          rules={[
            {
              required: true,
              message: 'Please input Student ID!'
            }
          ]}
        >
          <Input
            name='studentID'
            value={studentData.studentID}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item
          name='fullname'
          label='Full name'
          rules={[
            {
              required: true,
              message: 'Please input student fullname!'
            }
          ]}
        >
          <Input
            name='fullname'
            value={studentData.fullname}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item
          name='birthday'
          label='Birthday'
          style={{ width: '100%' }}
          rules={[
            {
              required: true,
              message: 'Please input birthday!'
            }
          ]}
        >
          <DatePicker
            value={moment(studentData.birthday, 'YYYY-MM-DD')}
            onChange={(date, text) =>
              handleInputChange({
                target: {
                  name: 'birthday',
                  value: moment(date).format('YYYY-MM-DD')
                }
              })
            }
          />
        </Form.Item>
        <Form.Item
          name='gender'
          label='Gender'
          rules={[
            {
              required: true,
              message: 'Please choose gender!'
            }
          ]}
        >
          <Radio.Group
            name='gender'
            value={studentData.gender}
            onChange={handleInputChange}
          >
            <Radio value='male' key={1}>
              Male
            </Radio>
            <Radio value='female' key={0}>
              Female
            </Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddStudentToClass;
