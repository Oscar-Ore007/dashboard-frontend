import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
        <nav className = "header">
                <div className="header-container">
                    <h1>DashBoard</h1>
                    { this.props.login ?
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        
                        <li><Link to="/about">About</Link></li>
                        <li>{this.props.currentUser.username}</li>
                    </ul>
                    :
                    null 
                    }
                </div>
        </nav>
        )
    }
}

export default Header