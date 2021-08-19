import React, { useState } from 'react';
import { Form, Input, Modal, Button, message } from 'antd';
import {
  ADD_STUDENT_TO_CLASS_ENTRY_POINT,
  apiRequest,
  POST
} from 'src/utils/apiRequest';
import { useSelector } from 'react-redux';

const AddStudentToClass = (props) => {
  const {
    filterOptions: { class_id }
  } = useSelector((state) => state.studentProps);

  const [studentData, setStudentData] = useState({
    student_id: ''
  });

  const onSaveAddStudent = async () => {
    const addStudentToClassPayload = {
      ...studentData,
      class_id
    };
//     await apiRequest(
      // ADD_STUDENT_TO_CLASS_ENTRY_POINT,
      // POST,
      // addStudentToClassPayload
    // );
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
          name='student_id'
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
        {/*<Form.Item
          name='full_name'
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
        </Form.Item>*/}
      </Form>
    </Modal>
  );
};

export default AddStudentToClass;
