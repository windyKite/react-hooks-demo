import React, { memo, useState, useMemo, useCallback } from 'react'

interface IChild1Props {
  number: Number
}
interface IChild2Props {
  onClick?: () => void
}

const UseMemoDemo = () => {
  console.log('UseMemoDemo 重新执行了!')
  const [number,setNumber] = useState(0)
  
  const handleClick = useMemo(()=>{
    return ()=>{
      console.log('click MemoChild2')
    }
  },[])
  // 以下代码和上面相等
  // const handleClick = useCallback(()=>{
  //   console.log('click MemoChild2')
  // },[])

  return (
    <div>
      <Child1 number={number}/>
      <button onClick={()=>{setNumber(n => n+1)}}>+1</button>
      <MemoChild2 onClick={handleClick} />
    </div>
  )
}

const Child1 = (props: IChild1Props) => {
  console.log('Child1 执行了!')
  const { number } = props
  return (
    <div>
      {number}
    </div>
  )
}

const Child2 = (props: IChild2Props) => {
  console.log('Child2 执行了!')  // 不添加 memo 的情况下, 父组件 UseMemoDemo 执行, Child2 也会跟着执行

  return (
    <div>
      <p {...props}>Child2</p>  {/** 即使是在 memo 中, 若不使用 useMemo, 因为父组件重新执行, 导致传入的 onClick 回调函数引用发生变化, MemoChild2 重新执行了 */}
    </div>
  )
}

const MemoChild2 = memo(Child2) // 使用 memo 之后, 父组件 UseMemoDemo 执行, MemoChild2 不会跟着执行


export default UseMemoDemo