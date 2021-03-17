import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <div>
                <div className="to-do-card"><h2>{this.props.task}</h2></div>
            </div>
        )
    }
}

export default Card