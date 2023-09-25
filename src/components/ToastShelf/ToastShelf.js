import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toastList}) {
  if (!toastList.length) {
    return null;
  }

  return (
    <ol className={styles.wrapper}>
      {toastList.map((toast) => (
        <li key={toast.id}>
          <Toast message={toast.message} variant={toast.variant} close={toast.close}/>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
