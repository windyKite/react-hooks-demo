import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from './routers/routes'
import Store from './store/store'
import Reducers from './reducers/reducers'
import Context from './Context/context'

const reducers = (state: State, action: Action): State => {
  const fn = Reducers[action.type]
  if(fn){
    return fn(state, action)
  }else{
    throw new Error('unkone type')
  }
}


function App() {
  const [state, dispatch] = useReducer(reducers, Store)

  console.log('state')
  console.log(state)

  const api = { state, dispatch }

  return (
    <Context.Provider value={api}>
      <Router>
        <Switch>
          {
            routes.map((item) => {
              return (
                <Route exact key={item.path} {...item} ></Route>
              )
            })
          }
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;
