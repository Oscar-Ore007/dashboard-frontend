import React, { Component } from 'react'
import ListCards from './ListCards'

class ListsContainer extends Component {

    state = {
        listCards: this.props.currentProject.lists
    }

    // handleClick = () => {
    //     this.setState({
    //         listCards: [ {name: 'New Task'}, 
    //         ...this,state.listCards]
    //     })
    // }


    render() {
        return (
            <div className="list-container">
                <ListCards listCards={this.state.listCards}/>
                <div onClick={this.handleClick} className='list-card-container'>
                    <h3>Add a List</h3>
                </div>
            </div>
        )
    }
}

export default ListsContainer;