import React from 'react';
import DashboardCard from './DashboardCard';
import DashboardActionButton from './DashboardActionButton';
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const ListContainer = styled.div`
background-color: #dfe3e6;
border-radius: 3px;
width: 300px;
padding: 8px;
height: 100%;
margin-right: 8px;
`;


 
const DashboardList = ({title, cards, listID, index }) => {
    return(
        <Draggable  draggableId={String(listID)} index={index}>
            {provided => (
        <ListContainer 
            {...provided.draggableProps} 
            ref={provided.innerRef} 
            {...provided.dragHandleProps}>
            <Droppable droppableId={String(listID)}>
                   {provided => (
                       <div {...provided.droppableProps} ref= {provided.innerRef}> 
                        <h4>{title}</h4>
                        {cards.map((card, index) => (
                        <DashboardCard key={card.id} index={index} text={card.text} id={card.id} />
                   ))}
                   <DashboardActionButton listID={listID} />
                   {provided.placeholder}
                   </div>
                   )}
           </Droppable>
        </ListContainer>
            )}
      </Draggable>
    );  
};

const styles = { 
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius: 3,
        width: 300,
        padding: 8,
        height: "100%",
        marginRight: 8
    }
    
};

export default DashboardList;