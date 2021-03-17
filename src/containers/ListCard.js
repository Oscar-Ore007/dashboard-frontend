import React, { Component } from "react";
import Card from '../components/Card'
import ListCardContainer from "./ListCardContainer";

class ListCards extends Component {

    state = {
        cards: []
    };

    handleClick = () => {
        
    }
    render() {
        const renderListCards = this.props.listCards.map(card => {
            return(
               <ListCardContainer 
               listCards={this.props.listCards}
               listCards={card}
               loadCurrentProject={this.props.loadCurrentProject}
               />
            );
        });
        return <React.Fragment>{renderListCards}</React.Fragment>;
    }
}

export default ListCard; 