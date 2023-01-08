import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
    
    const [windowSize, setWindowSize] = useState(getWindowSize());
    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
      }
      useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);
    return windowSize;
}