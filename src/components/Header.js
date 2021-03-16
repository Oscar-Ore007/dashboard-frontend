import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
        <nav className = "header">
            <div className="header">
                <div className="header-container">
                    <h1>DashBoard</h1>
                    { this.props.login ?
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>Boards</li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                    :
                    null 
                    }
                </div>
            </div>
        </nav>
        )
    }
}

export default Header 