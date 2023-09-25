import React from 'react';

import { ToastContext } from '../ToastProvider';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  if (!toasts.length) {
    return null;
  }

  return (
    <ol 
      className={styles.wrapper}
      role='region'
      aria-live="polite"
      aria-label='Notification'
    >
      {toasts.map((toast) => (
        <li key={toast.id}>
          <Toast message={toast.message} variant={toast.variant} close={toast.close}/>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
