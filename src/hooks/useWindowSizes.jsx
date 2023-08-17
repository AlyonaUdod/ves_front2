import { useState, useEffect } from 'react';

const useWindowSizes = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  });
  return { width, height };
};

export default useWindowSizes;
