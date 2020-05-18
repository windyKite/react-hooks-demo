import React, { useReducer } from 'react'

type StateType = {
  count: number
}
type ActionType = {
  type: 'add' | 'mult' | 'reduce'
}

const reducers = (state: StateType, action: ActionType): StateType => {
  switch(action.type) {
    case 'add': 
      return {...state, count: state.count + 1}
    case 'mult': 
      return {...state, count: state.count * state.count}
    case 'reduce':
      return {...state, count: state.count - 1}
    default:
      return {...state}
  }
}

const UseReducerDemo = () => {
  const [state, dispatch] = useReducer(reducers, {count: 0})
  return (
    <div>
      <p>{state.count}</p>
      <button type="button" onClick={()=> dispatch({type: 'add'})}>+1</button>
      <button type="button" onClick={()=> dispatch({type: 'reduce'})}>-1</button>
      <button type="button" onClick={()=> dispatch({type: 'mult'})}>*</button>
    </div>
  )
}

export default UseReducerDemo

