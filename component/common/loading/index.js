import React from 'react';
import styles from './index.module.css';
import {Spin} from 'antd'

const Loading = () => {
  return (
    <div className={styles.root}>
      <Spin size='large'/>
    </div>
  );
};

export default Loading;
