import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/layout/NavBar';
import './App.css';
import Dashboard from './components/layout/Dashboard';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Covid from './components/covid/Covid';

function App() {

  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='container'>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path='/covid/:country' component={Covid} />
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
