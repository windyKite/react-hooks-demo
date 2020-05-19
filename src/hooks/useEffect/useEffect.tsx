import React, { useState, useEffect, useLayoutEffect } from 'react'

const UseEffectDemo = () => {
  const [number, setNumber] = useState(0)

  useEffect(()=>{
    console.log('只在第一次渲染时执行')
  }, []) // 只在第一次渲染时执行, 类似于 componentDidMount

  useEffect(()=>{
    console.log('依赖 number 改变了, 所以执行')
  }, [number]) // 只在 依赖 number 发生改变时执行, 类似于 componentDidUpdate

  useEffect(()=>{
    return () => {
      console.log('组件即将卸载')
    }
  }) // 在组件卸载前执行, 类似于 componentWillUnmount

  useLayoutEffect(()=>{
    document.title = `useLayoutEffect 改变了标题${number}`
  },[])

  return (
    <div>
      <p>{number}</p>
      <button onClick={()=>setNumber(number + 1)}>+1</button>
    </div>
  )
}

export default UseEffectDemo