import React from 'react';
import { Form, Input, Modal, Button, DatePicker, Radio, message } from 'antd';

const AddStudentToClass = (props) => {
  const onSaveAddStudent = () => {
    message.info('Added');
  };

  return (
    <Modal
      title='Add Student to class'
      visible={props.addStudentVisible}
      footer={[
        <Button key='back' onClick={() => props.setAddStudentVisible(false)}>
          Cancel
        </Button>,
        <Button key='submit' onClick={() => onSaveAddStudent()}>
          Save
        </Button>
      ]}
    >
      <Form name='addstudent'>
        <Form.Item name='id' label='Student ID'>
          <Input />
        </Form.Item>
        <Form.Item name='fullname' label='Full name'>
          <Input />
        </Form.Item>
        <Form.Item name='birthday' label='Birthday'>
          <DatePicker />
        </Form.Item>
        <Form.Item name='gender' label='Gender'>
          <Radio.Group>
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
