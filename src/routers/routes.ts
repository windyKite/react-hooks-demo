import Home from '../Home'
import UseStateDemo from '../hooks/useState/useState'
import UseReducerDemo from '../hooks/useReducer/useReducer'

const routers = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/useState',
    component: UseStateDemo,
  },
  {
    path: '/useReducer',
    component: UseReducerDemo,
  }
] 

export default routers