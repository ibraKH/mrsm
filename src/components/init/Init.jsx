import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

const Init = () => {
    useEffect(() => {
        Aos.init({});
    }, [])
  return (
    <>
    
    </>
  )
}

export default Init;