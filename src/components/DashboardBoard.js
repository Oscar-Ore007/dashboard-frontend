import React, { PureComponent } from "react";
import DashboardList from "./DashboardList";
import { connect } from "react-redux";
import DashboardCreate from "./DashboardCreate";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { sorrt, setActiveBoard } from "../actions";
import { Link } from "react-router-dom";

const ListsContainer = styled.div`
    display: flex;
    flex-direction: row;
    `;

class DashboardBoard extends PureComponent {
    componentDidMount() {
        const { boardID } = this.props.match.params;

        this.props.dispatch(setActiveBoard(boardID));
    }

    onDragEnd = result => {
        const { destination, source, draggableID, type } = results;

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
        const { lists, cards, match, boards } = this.props;
        const { boardID } = match.params;
        const board = boards[boardID];
        if (!board) {
            return <p>Board not found</p>;
        }
        const listOrder = board.lists;

        return(
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Link to="/">Go Back</Link>
                <h2>{board.title}</h2>
                <Droppable droppableId="all-lists" direction="horizontal" type="list">
                    {provided => (
                        <ListsContainer
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        >
                            {listOrder.map((listID, index) => {
                                const list = lists[listsID];
                                if (list) {
                                    const listCards = list.cards.map(cardID => cards[cardsID]);

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
                            <DashboardCreate list /> 
                        </ListsContainer>
                    )}
                    </Droppable>
                </DragDropContext>
        );
    }
}

const mapStateToProps = state => ({
    lists: state.lists,
    cards: state.cards,
    boards: state.boards
});

export default connect(mapStateToProps)(DashboardBoard);