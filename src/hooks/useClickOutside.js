import {useEffect, useRef} from 'react';

export default function useClickOutside(handler) {
  const ref = useRef();

  function handleClickOutside(event) {
    if (ref && !ref.current.contains(event.target)) {
      handler();
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return function() {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return ref;
}
