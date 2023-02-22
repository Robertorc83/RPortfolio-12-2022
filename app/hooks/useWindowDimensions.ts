import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
    
    const [windowSize, setWindowSize] = useState(getWindowSize());
    function getWindowSize() {
      if(typeof window !== "undefined"){
          const {innerWidth, innerHeight} = window;
          return {innerWidth, innerHeight};
        }
    }

      useEffect(() => {
        if(typeof window !== "undefined"){
          function handleWindowResize() {
            setWindowSize(getWindowSize());
          }
      
          window.addEventListener('resize', handleWindowResize);
      
          return () => {
            window.removeEventListener('resize', handleWindowResize);
          };
        } 
      }, []);
    return windowSize;
}