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
          {/* <Route path = '/' exact component = {Homepage }/>
           <Route path = '/signin' exact component = {Signin}/>
           <Route path = '/studentlist' exact component = {DataTable}/>
           <Route path = '/fetchstudents' exact component = {FetchStudents}/>
           <Route path = '/startcam' exact component = {StartCam}/> */}
        </Switch>
      </Router>
      {/* <Signin /> */}
    </>
  );
}

export default App;
