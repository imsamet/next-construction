import React from 'react';
import styles from './styles.module.scss';

const Loading: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loading;
