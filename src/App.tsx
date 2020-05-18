import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from './routers/routes'

function App() {
  return (
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
  );
}

export default App;
