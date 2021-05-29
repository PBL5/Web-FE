import React from 'react';
import styles from './index.module.css';

const Dialog = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default Dialog;
