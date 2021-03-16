import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import Sidebar from './containers/Sidebar';
import ProjectContainer from './containers/ProjectContainer';
import Login from './components/Login'

function App() {
    return (
    <Router>
        <Header /> 
        <Switch>
            <Route path='/about' component={About} /> 
        <div className='home-container'>
            <Sidebar />
            <ProjectContainer />
        </div>
        </Switch>
    </Router>
    );
}

export default App; 