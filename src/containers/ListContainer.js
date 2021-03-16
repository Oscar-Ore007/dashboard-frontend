import React, { Component } from 'react'
import ListCard from './ListCard'

class ListsContainer extends Component {

    state = {
        listCards: [
            {name: 'Create Backend'},
            {name: 'Frontend'},
            {name: 'Complete'}
        ]
    }

    handleClick = () => {
        this.setState({
            listCards: [ {name: 'New Task'}, 
            ...this,state.listCards]
        })
    }


    render() {
        return (
            <div className="list-container">
                <ListCard listCards={this.state.listCards}/>
                <div onClick={this.handleClick} className='list-card-container'>
                    <h3>Add a List</h3>
                </div>
            </div>
        )
    }
}

export default ListsContainer;