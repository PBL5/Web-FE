import { Select } from 'antd';
import React from 'react';
import styles from './index.module.css';
import 'antd/dist/antd.css';

const AddStudentToClass = () => {
  const { Option } = Select;
  return (
    <div className={styles.root}>
      <div className={styles.wrapCmp}>
        <div className={styles.title}>ADD STUDENT TO CLASS</div>

        <div>
          <div>Choose class</div>
          <Select style={{ width: '100%' }}>
            <Option>abc</Option>
          </Select>
        </div>

        <div>
          <label>Search student</label>
          <input className={styles.input} />
        </div>
      </div>
    </div>
  );
};

export default AddStudentToClass;
