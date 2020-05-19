import React, { useState, useRef } from 'react'

const UseRef = () => {
  const [number,setNumber] = useState(0)
  const ref = useRef(0)

  console.log('ref')
  console.log(ref)

  const addRef = () => {
    ref.current += 1
  }

  return (
    <div>
      <p>number: {number}</p>
      <button onClick={()=>{
        setNumber(number + 1)
      }}>add number</button>
      <p>{ref.current}</p>
      <button onClick={addRef}>add ref.current</button> { /** addRef 对 ref.current 的操作并不会触发渲染 */}
    </div>
  )
}

export default UseRef