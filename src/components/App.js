import React, { Component } from "react";
import DashboardList from "./DashboardList";
import { connect } from "react-redux";


class App extends Component {
  render() {

    const {lists} = this.props;
    return(
      <div className="App">
     <h2>Hello Youtube</h2>
      { lists.map(list => (
      <DashboardList title ={list.title} cards={list.cards} />
      ))}
     
    </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists 
});



export default connect (mapStateToProps) (App);
