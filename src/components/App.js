import React, { PureComponent } from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloCreate from "./TrelloCreate";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { sort } from "../actions";
const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
// TODO: Fix performance issue
class App extends PureComponent {
  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };
  render() {
    const { lists, listOrder, cards } = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <h2>DashBoard</h2>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {provided => (
            <ListsContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {listOrder.map((listID, index) => {
                const list = lists[listID];
                if (list) {
                  const listCards = list.cards.map(cardID => cards[cardID]);

                  return (
                    <TrelloList
                      listID={list.id}
                      key={list.id}
                      title={list.title}
                      cards={listCards}
                      index={index}
                    />
                  );
                }
              })}
              {provided.placeholder}
              <TrelloCreate list />
            </ListsContainer>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}
const mapStateToProps = state => ({
  lists: state.lists,
  listOrder: state.listOrder,
  cards: state.cards
});
export default connect(mapStateToProps)(App);