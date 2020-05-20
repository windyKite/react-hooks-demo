import Home from '../Home'
import UseStateDemo from '../hooks/useState/useState'
import UseReducerDemo from '../hooks/useReducer/useReducer'
import User from '../components/user'
import Books from '../components/books'
import Movies from '../components/movies'
import UseContextDemo from '../hooks/useContext/useContext'
import UseEffectDemo from '../hooks/useEffect/useEffect'
import UseMemoDemo from '../hooks/useMemo/useMemo'
import UseRef from '../hooks/useRef/useRef'
import UseImperativeHandle from '../hooks/useImperativeHandle/useImperativeHandle'

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
  },
  {
    path: '/user',
    component: User,
  },
  {
    path: '/books',
    component: Books,
  },
  {
    path: '/movies',
    component: Movies,
  },
  {
    path: '/useContext',
    component: UseContextDemo,
  },
  {
    path: '/useEffect',
    component: UseEffectDemo,
  },
  {
    path: '/useMemo',
    component: UseMemoDemo,
  },
  {
    path: '/useRef',
    component: UseRef,
  },
  {
    path: '/useImperativeHandle',
    component: UseImperativeHandle,
  }
] 

export default routers