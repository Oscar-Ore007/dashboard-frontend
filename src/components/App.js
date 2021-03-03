import React, { Component } from "react";
import DashboardList from "./DashboardList";
import { connect } from "react-redux";
import DashboardActionButton from "./DashboardActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";
import styled from "styled-components";


const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends Component {

  onDragEnd = (result) => {
    const { destination, source, draggableId} = result; 
  
      if(!destination) {
        return;
        }

        this.props.dispatch(
          sort(
            source.droppableId,
            destination.droppableId,
            source.index,
            destination.index,
            draggableId
            )
          );
    };
  render() {

    const {lists} = this.props;
    return(
      <DragDropContext onDragEnd={this.onDragEnd}>
      <div className="App">
     <h2>Hello Youtube</h2>
     <ListContainer>
      { lists.map(list => (
      <DashboardList 
      listID={list.id}
      key={list.id} 
      title ={list.title} 
      cards={list.cards} />
      ))}
      <DashboardActionButton list /> 
     </ListContainer>
    </div>
    </DragDropContext>
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
