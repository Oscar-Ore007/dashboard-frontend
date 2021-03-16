import React, { Component } from "react";

class Login extends Component {
    state = {
        username: "",
        password: "",
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        });
    };

    render(){
        return(
            <div className='login-component'>
                <h2>Login Page</h2>
                <form>
                    <input
                        type='text'
                        name='username'
                        placeholder='Username'
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                    <input type='submit' />
                </form>
            </div>
        );
    }
}

export default Login;