import React from 'react';

function useKeydownHook(key, keyFunction) {

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === key) {
        keyFunction();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, keyFunction]);

}

export default useKeydownHook;