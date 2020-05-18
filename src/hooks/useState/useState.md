useState
- 使用状态
  - `const [ number, setNumber ] = useState(0)`
  - `const [ name, setName ] = useState({ name: '萧泳森' })` 
  - useState 接收函数 `const [ state, setState ] = useState(() => ({ name: 'Belial', age: 9+9 }))` 好处: 接收的函数返回一个初始的 state, 且只会执行一次.(可减少二次执生成 state 时初始对象不必要的计算)
  - setState 接受函数, 该函数表示一个对该 state 的操作
- 注意事项
  - 如果 state 是一个对象, 不能局部更新 state. (setState不会合并属性,需要手动合并`{...state, newState}`)
  - 如果 state 是一个对象, 更新时需要改变对象引用地址.(state共用同一个引用地址, react认为数据没有变化)

实现原理:
函数组件执行时, 生成了 virtual dom 对象, useState hook 在生成的对应的 virtual dom 节点上注入了变量. 每一次 setState 方法的执行, 都会重新调用一次函数组件,生成新的 virtual dom, 此时 react 会使用 fiber 算法对比两次生成的 virtual dom 对象, 以此去确定是否重新渲染页面.