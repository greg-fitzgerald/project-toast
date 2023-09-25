import React from 'react';

import { ToastContext } from '../ToastProvider';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, setToasts } = React.useContext(ToastContext);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setToasts([])
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toasts, setToasts]);

  if (!toasts.length) {
    return null;
  }

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id}>
          <Toast message={toast.message} variant={toast.variant} close={toast.close}/>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
