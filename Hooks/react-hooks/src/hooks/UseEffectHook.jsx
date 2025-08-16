import React, { useState, useEffect } from 'react'

const UseEffectHook = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerHeight);

    const handleResize = () => {
      setWindowWidth(window.innerHeight)
    }

    useEffect(() => {
      window.addEventListener('resize', handleResize)
    }, [])

  return (
    <div> {windowWidth}
    </div>
  )
}

export default UseEffectHook
