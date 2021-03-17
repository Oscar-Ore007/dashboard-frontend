import React, { Component } from 'react'
import Card from '../components/Card'

class ListCardContainer extends Component {

    state = {
        clicked: false 
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        return (
            <div>
                <div className='list-card-container'>
                    <h2>{this.props.listCards.name}</h2>
                    {this.props.listCards.tasks.map(task => <Card task={task.content} 
                    />)}
                    {!this.state.clicked ?
                    <div className="add-card-button">
                        <button onClick={this.handleClick}>Add a card</button>
                </div>
                :
                <div>
                    <input type="text" />
                    <input type="submit" />
                    <button onClick={this.handleClick}>x</button>
            </div>
            }
            </div>
        </div>
        )
    }
}

export default ListCardContainer