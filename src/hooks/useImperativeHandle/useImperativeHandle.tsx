import React, { useImperativeHandle, forwardRef, useRef, InputHTMLAttributes } from 'react'

type InputProps = React.HTMLProps<HTMLInputElement>

interface MyInputHandle {
  focus?: () => void
}

const UseImperativeHandleDemo = () => {
  return (
    <div>
      <Input/>
    </div>
  )
}

const Input = forwardRef<MyInputHandle, InputProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => ({
    focus: () => {
      if(inputRef.current){
        inputRef.current.focus();
      }
    }
  }));

  return (
    <div>
      <input type="text" ref={inputRef}/>
    </div>
  )
})

export default UseImperativeHandleDemo



