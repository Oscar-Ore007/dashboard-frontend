import React from "react";
import { HashRouter as Router, Route} from "react-router-dom";
import DashboardBoard from "../components/DashboardBoard";
import Home from "../components/Home";

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Route path="/" exact component={Home} /> 
                <Route path="/:boardID" component={DashboardBoard} /> 
            </div>
        </Router>
    );
};

export default AppRouter; 