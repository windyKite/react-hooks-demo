import React, { useImperativeHandle, forwardRef, useRef, InputHTMLAttributes, useState, createRef, useEffect } from 'react'

type InputProps = React.HTMLProps<HTMLInputElement>

interface MyInputHandle {
  focus: () => void
}

const UseImperativeHandleDemo = () => {
  const [str, setStr] = useState('')
  const inputRef = useRef<MyInputHandle>(null)

  useEffect(()=>{
    console.log('inputRef')
    console.log(inputRef)
  })

  return (
    <div>
      <Input ref={inputRef} onChange={(e)=>{setStr(e.currentTarget.value)}} value={str}/>
      <button onClick={()=>inputRef.current?.focus()}>click</button>
    </div>
  )
}

const Input = forwardRef<MyInputHandle, InputProps>((props, ref) => {
  const realInput = createRef<HTMLInputElement>()

  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        if(realInput.current){
          realInput.current.focus();
        }
      },
      realInput: realInput
    }
  });

  return (
    <div>
      <input type="text" ref={realInput} {...props}/>
    </div>
  )
})

export default UseImperativeHandleDemo



