import React from 'react';

import './App.css';
import { Switch, Route } from 'react-router-dom'

import About from './components/About'

function App() {
    return (
        <Switch>
            <Route path="/about" component={About} /> 

        </Switch>
    );
}

export default App; 