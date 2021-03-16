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
                <div id="login-header">
                <h2>Login</h2>
                </div>
                <form>
                    <input
                        type='text'
                        name='username'
                        placeholder='Username'
                        onChange={this.handleChange}
                        value={this.state.username}
                    /><br></br>
                    <input 
                    type='password'
                    name='password'
                    placeholer='Password'
                    onChange={this,handleChange}
                    value={this.state.password}
                    /> <br></br>
                    <input type='submit' />
                </form>
                <p><Link to={'/signup'}>Create an Account</Link></p>
            </div>
        );
    }
}

export default Login;