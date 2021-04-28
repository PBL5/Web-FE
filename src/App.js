import React from 'react'
import {BrowserRouter as Router,  Switch, Route} from 'react-router-dom'

import './App.css'

import {Navbar, WatchTutorial, Homepage, Signin, Signout, FetchStudents} from './component/index'

function App() {
  return (
    <>
       <Router>
       <Navbar/>
         <Switch>
           <Route path = '/' exact component = {Homepage }/>
           <Route path = '/' exact component = {Signout}/>
           <Route path = '/signin' exact component = {Signin}/>
                  <Route path = '/video' exact component = {WatchTutorial}/>
                </Switch>
       </Router> 
       

export default App;
