import React from 'react';

import Button from '../Button';

import Toast from '../Toast';

import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');
  const [toastList, setToastList] = React.useState([]);

  const createNewToast = (event) => {
    event.preventDefault();

    const newToast = {
      message,
      variant,
      id: Math.random(),
      close: () => {
        setToastList(toastList.filter((toast) => toast.id !== newToast.id));
      }
    };

    setToastList([...toastList, newToast]);
    setMessage('');
    setVariant('notice');

  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toastList={toastList}/>

      <form onSubmit={(event) => {createNewToast(event)}}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                onChange={(event) => setMessage(event.target.value)}
                value={message}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              {VARIANT_OPTIONS.map((option) => (
                <label
                  htmlFor={`variant-${option}`}
                  key={option}
                >
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={option}
                    onChange={() => setVariant(option)}
                    checked={variant === option}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button type='submit'>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
