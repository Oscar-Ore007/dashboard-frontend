import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TrelloBoard from "../components/TrelloBoard";
import Home from "../components/Home";
import About from "../components/About";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/:boardID" component={TrelloBoard} />
        <Route path="/about" component={About} /> 
      </div>
    </Router>
  );
};

export default AppRouter;