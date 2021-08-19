import React from 'react';
import { Form, Input, Select } from 'antd';

const UpdateStudentInformation = ({ studentInfo }) => {
  const fields = [
    {
      label: 'Student ID',
      key: 'user_id'
    },
    {
      label: 'Full name',
      key: 'full_name'
    },
    {
      label: 'Email',
      key: 'email'
    },
    {
      label: 'Gender',
      key: 'gender'
    },
    {
      label: 'Birthday',
      key: 'birthday'
    }
  ];

  return (
    <Form name='handcheck' style={{ margin: 20 }} layout='vertical'>
      {fields.map((field, key) => (
        <Form.Item key={key} label={field.label}>
          <Input disabled value={studentInfo[field.key]} />
        </Form.Item>
      ))}
      <Form.Item label='Check Attending'>
        <Select placeholder='--Hand check--'>
          <Select.Option value={1}>Attending</Select.Option>
          <Select.Option value={0}>Absent</Select.Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

export default UpdateStudentInformation;
