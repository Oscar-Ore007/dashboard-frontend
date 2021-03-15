import React, { PureComponent } from "react";
import DashboardList from "./DashboardList";
import { connect } from "react-redux";
import DashboardCreate from "./DashboardCreate";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Routes from "../routes";
import { sort } from "../actions";


class App extends PureComponent {
  render() {
    return <Routes />;
  }
}

export default App; 
