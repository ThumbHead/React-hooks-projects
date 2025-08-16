import React, { useState } from 'react'

const UseStateHook = () => {

  const [count, setCount] = useState(0);

  function decrement() {
    if (count > 0) {
      setCount(count - 1)
    } else {
      alert("Cant go below 0")
    }
  }

  function increment() {
     if (count < 20) {
      setCount(count + 1)
    } else {
      alert("Cant go above 20")
    }
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default UseStateHook
