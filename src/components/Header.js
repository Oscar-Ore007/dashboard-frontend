import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Header extends Component {

    handleClick = () => {
        localStorage.clear()
    }
    render() {
        return (
        <nav className = "header">
                <div className="header-container">
                    <h1>DashBoard</h1>
                    { this.props.login ?
                    <ul>
                        <li><Link to="/" className='cool-link'>Home</Link></li>
                        <li><Link to="/about" className='cool-link'>About</Link></li>
                        <li><Link to='/login' className='cool-link' onClick=
                        {this.handleClick}>{this.props.currentUser.username}</Link></li>
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