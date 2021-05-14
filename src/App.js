import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './component/common/navbar/Navbar';

import routes from './routes';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          {routes.map(({ component, path, exact }, index) => (
            <Route key={index} path={path} exact={exact}>
              {component}
            </Route>
          ))}
        </Switch>
      </Router>
      {/* <Signin /> */}
    </>
  );
}

export default App;
