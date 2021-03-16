import React, { Component } from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Sidebar from "./containers/Sidebar";
import ProjectContainer from "./containers/ProjectContainer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ListsContainer from "./containers/ListsContainer"

class App extends Component {

    state = {
        login: true 
    }
render() {
    return (
    <Router>
        <Header /> 
        <Switch>
            <Route path='/about' component={About} /> 
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/project' component={ListsContainer} />  
            <div className='home-container'>
            <Sidebar />
            <ProjectContainer />
        </div>
        </Switch>
    </Router>
        );
    }
}

export default App; 