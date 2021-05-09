import React from 'react'
import {BrowserRouter as Router,  Switch, Route} from 'react-router-dom'

import './App.css'

import {Navbar, Homepage, Signin, Signout, DataTable, FetchStudents} from './component/index'

function App() {
  return (
    <>
       <Router>
       <Navbar/>
         <Switch>
           <Route path = '/' exact component = {Homepage }/>
           <Route path = '/' exact component = {Signout}/>
           <Route path = '/signin' exact component = {Signin}/>
           <Route path = '/studentlist' exact component = {DataTable}/>
           <Route path = '/fetchstudents' exact component = {FetchStudents}/>
       </Switch>
       </Router> 
       {/* <Signin /> */}
    </>
  );
}

export default App;
