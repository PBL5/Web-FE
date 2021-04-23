import React from 'react'
import {BrowserRouter as Router,  Switch, Route} from 'react-router-dom'

import './App.css'

import {Navbar, StudentList, WatchTutorial, Homepage, Signin, Signup, Signout} from './component/index'

function App() {
  return (
    <>
       <Router>
       <Navbar/>
         <Switch>
           <Route path = '/' exact component = {Homepage }/>
           <Route path = '/' exact component = {Signout}/>
           <Route path = '/signin' exact component = {Signin}/>
           <Route path = '/signup' exact component = {Signup}/>
           <Route path = '/video' exact component = {WatchTutorial}/>
           <Route path = '/studentlist' exact component = {StudentList}/>
       </Switch>
       </Router> 
    </>
  );
}

export default App;
