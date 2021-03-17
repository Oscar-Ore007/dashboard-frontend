import React, { Component } from "react";
import Card from '../components/Card'
import ListCardContainer from "./ListCardContainer";

class ListCard extends Component {

    state = {
        cards: [],
        clicked: false 
    }

    handleClick = () => {
        
    }
    render() {
        const renderListCards = this.props.listCards.map(card => {
            return(
               <ListCardContainer listCards={card}/>
            );
        });
        return (
            <React.Fragment>
                {renderListCards}
            </React.Fragment>
        );
    }
}

export default ListCard; 