import React from 'react';
import styles from './index.module.css';

const Loading = () => {
  return (
    <div className={styles.root}>
      <label className={styles.loadingLabel}>Loading...</label>
    </div>
  );
};

export default Loading;
