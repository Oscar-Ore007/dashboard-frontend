import React, { Component } from "react";

class Card extends Component {

    state = {
        hover: false
    };

    handleMouseOver = () => {
        this.setState({
            hover: true 
        });
    };

    handleMouseOver = () => {
        this.setState({
            hover: false
        });
    };
    render() {
        return (
                <div className='card-component'>
                    <div
                    onMouseEnter={this.handleMouseOver}
                    onMouseLeave={this.handleMouseOver}
                    className='to-do-card'
                    >
                        <h2>{this.props.task}</h2>
                        {this.state.hover ? <h3 onClick={this.handleClick}>x</h3> : null}
                    </div>
            </div>
        );
    }
}

export default Card;