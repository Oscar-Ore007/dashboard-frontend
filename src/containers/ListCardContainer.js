import React, { Component } from "react";
import Card from "../components/Card";

class ListCardContainer extends Component {

    state = {
        taskCards: this.props.listCards.tasks,
        clicked: false,
        inputValue: ""
    };

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        });
    };

    handleChange = e => {
        this.setState({
            inputValue: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        fetch(`http://localhost:3000/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Augthorization: localStorage.token 
            },
            body: JSON.stringify({
                list_id: this.props.listCards.id,
                content: this.state.inputValue
            })
        })
        .then(resp => resp.json())
        .then(respData => {
            this.setState({
                taskCards: [...this.state.taskCards, respData.data.attributes],
                clicked: false,
                inputValue: ''
            })
        });
    };

    render() {
        return (
            <div>
                <div className='list-card-container'>
                    <h2>{this.props.listCards.name}</h2>
                    {this.state.taskCards.map(task => (
                        <Card task={task.content} taskId={task.id} />
                    ))}
                    {!this.state.clicked ? (
                        <div className='add-card-button'>
                        <button onClick={this.handleClick} className='add-card-btn'>Add a card</button>
                </div>
                     ) : (
                         <form onSubmit={this.handleSubmit} className='list-card-form'>
                             <textarea
                             onChange={this.handleChange}
                             value={this.state.inputValue}
                             type='text'
                             placeholder='Enter a title for this card...'
                            ></textarea>
                            <div className='list-card-form-wrapper'>
                            <input type='submit' />
                            <h2 onClick={this.handleClick}>x</h2>
                            </div>
                         </form>
                     )}
            </div>
        </div>
        );
    }
}

export default ListCardContainer;