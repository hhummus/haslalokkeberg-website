  import { useLayoutEffect, useState } from "react";
  
  // check window size 
  function CheckWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
    }, []);
    return size;
  }

export default CheckWindowSize;