import React from 'react';
import { Form, Input } from 'antd';
import _ from 'lodash';

const StudentHandCheck = ({ record }) => {
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
    </Form>
  );
};

export default StudentHandCheck;
