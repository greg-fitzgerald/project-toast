import React from 'react';
import useKeydownHook from '../../hooks/KeydownHook';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);
  
  useKeydownHook('Escape', () => {setToasts([])})

  const createNewToast = (message, variant) => {
    const newToast = {
      message,
      variant,
      id: Math.random(),
      close: () => {
        setToasts(toasts.filter((toast) => toast.id !== newToast.id));
      }
    };
    
    setToasts([...toasts, newToast]);
    
  }
  
  const value = {
    toasts,
    setToasts,
    createNewToast
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
