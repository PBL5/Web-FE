import React, { useState } from 'react';
import { Form, Input, Modal, Button, DatePicker, Radio, message } from 'antd';

const AddStudentToClass = (props) => {
  const [studentData, setStudentData] = useState({
    studentID: '',
    fullname: '',
    birthday: '',
    gender: ''
  });
  const onSaveAddStudent = (values) => {
    message.info('Added');
    console.log(values);
  };

  return (
    <Modal title='Add Student to class' visible={props.addStudentVisible}>
      <Form name='addstudent' onSubmit={() => onSaveAddStudent()}>
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
          <Input />
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
          <Input />
        </Form.Item>
        <Form.Item
          name='birthday'
          label='Birthday'
          rules={[
            {
              required: true,
              message: 'Please input birthday!'
            }
          ]}
        >
          <DatePicker />
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
          <Radio.Group>
            <Radio value='male' key={1}>
              Male
            </Radio>
            <Radio value='female' key={0}>
              Female
            </Radio>
          </Radio.Group>
        </Form.Item>
        <div style={{ alignContent: 'right' }}>
          <Button onClick={() => props.setAddStudentVisible(false)}>
            Cancel
          </Button>
          <Button type='primary' htmlType='submit'>
            Save
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddStudentToClass;
