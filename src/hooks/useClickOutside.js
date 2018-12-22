import {useEffect, useRef} from 'react';

export default function useClickOutside(callback) {
  const ref = useRef();

  function handleClickOutside(event) {
    if (ref && !ref.current.contains(event.target)) {
      callback && callback();
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return function() {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return ref;
}
