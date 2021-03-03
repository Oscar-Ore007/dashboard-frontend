import React, { Component } from "react";
import DashboardList from "./DashboardList";
import { connect } from "react-redux";
import DashboardActionButton from "./DashboardActionButton";

class App extends Component {
  render() {

    const {lists} = this.props;
    return(
      <div className="App">
     <h2>Hello Youtube</h2>
     <div style={styles.listsContainer}>
      { lists.map(list => (
      <DashboardList listID={list.id}
      key={list.id} title ={list.title} cards={list.cards} />
      ))}
      <DashboardActionButton list /> 
     </div>
    </div>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight: 8
  }
};
const mapStateToProps = state => ({
  lists: state.lists 
});



export default connect (mapStateToProps) (App);
