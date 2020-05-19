import React, { createContext, useContext, useState } from 'react'

interface IContextInitProps {
  number: number
  setNumber: (value: number) => void
}

const Context = createContext({} as IContextInitProps)

const UseContextDemo = () => {
  const [number, setNumber] = useState(0)
  return (
    <Context.Provider value={{ number, setNumber }}>
      <Parent/>
    </Context.Provider>
  )
}

const Parent = () => {
  return (
    <div>
      <Child></Child>
    </div>
  )
}

const Child = () => {
  const {number, setNumber} = useContext(Context) 
  
  return (
    <div>
      <p>{number}</p>
      <button onClick={()=>{setNumber(number + 1)}}>+1</button>
    </div>
  )
}

export default UseContextDemo