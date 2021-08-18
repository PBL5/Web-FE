import React from 'react';
import { Form, Input, Select } from 'antd';
import _ from 'lodash';

const UpdateStudentInformation = ({ record }) => {
  console.log(record);
  return (
    <Form name='handcheck' style={{ margin: 20 }} layout='vertical'>
      <Form.Item label='Student ID'>
        <Input placeholder={record.user_id} />
      </Form.Item>
      <Form.Item label='Full name'>
        <Input placeholder={record.fullname} />
      </Form.Item>
      <Form.Item label='Email'>
        <Input placeholder={record.email} />
      </Form.Item>
      <Form.Item label='Gender'>
        <Input placeholder={record.gender} />
      </Form.Item>
      <Form.Item label='Birthday'>
        <Input placeholder={record.birthday} />
      </Form.Item>
      <Form.Item label='Check Attending'>
        <Select placeholder='--Hand check--'>
          <Select.Option value='check'>Attending</Select.Option>
          <Select.Option value='uncheck'>Absent</Select.Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

export default UpdateStudentInformation;
