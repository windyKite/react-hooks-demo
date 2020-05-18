import React, { useState } from 'react'

const UseStateDemo = () => {
  const [number, setNumber] = useState(0)
  return <div>
    <p>{number}</p>
    <button type="button" onClick={
      ()=>{
        setNumber(number + 1)
      }
    }>number + 1</button>
  </div>
}

export default UseStateDemo

