import React, { Component } from "react";

import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/About';
import Header from './components/Header';
import Sidebar from './containers/Sidebar';
import ProjectContainer from './containers/ProjectContainer';
import Login from './components/Login';
import Signup from './components/Signup';
import ListsContainer from './containers/ListsContainer'

class App extends Component {

    state = {
        login: false,
        projectList: [],
        currentProject: {},
        projectsLoaded: false 
    };

    componentDidMount(){
        this.checkForToken();
    }

    checkForToken = () => {
        localStorage.token 
        ? this.getUserFromToken()
        : console.log("You are not logged in");
    };

    logInUserByToken = () => {
        fetch("http://localhost:3000/persist", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.token,
                'Accept': 'application/json'
            }
        }).then(res => res.json())
        .then(userInfo => {
            this.setState({
                login: true,
                currentUser: userInfo
            }, () => {
                this.fetchprojectList();
            })
        })
    }

    getUserFromToken = () => {
        fetch('http://localhost:3000/persist', {
            method: 'GET',
            headers: {
                'Authorization': localStorage.token,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

        .then(res => res.json())
        .then(userInfo => {
            this.setState(
                {
                    login: true,
                    currentUser: userInfo

            },
            () => {
                console.log(this.state.currentUser);
                if (this.state.login) {
                    this.logInUserByToken();
                 }
                }
            );
        });
    };

    logInUser = (username, password) => {
        fetch('http://localhost:3000/tokens', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(res => res.json())
        .then(userInfo => {
        
            this.setState(
                {
                    login: true,
                    currentUser: userInfo
                },
                () => {
                    localStorage.setItem('token', userinfo.token);
                    this.fetchprojectList();
                }
            );
        });
    };

    fetchprojectList = () => {
        fetch(`http://localhost:3000/users/${this.state.currentUser.user_id}`, {
            headers: {
                Authorization: localStorage.token 
            }
        })

        .then(resp => resp.json())
        .then(respData => {
            this.setState({
                projectList: respData.data.attributes.projects,
                projectsLoaded: true
            });
        });
    };

    loadCurrentProject = projectId => {
        fetch(`http://localhost:3000/projects/${projectId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: localStorage.token 
            }
        })
        .then(res => res.json())
        .then(fetchData => {
            let { attributes } = fetchData.data;
            this.setState({
                currentProject: {...attributes}
            });
        });
    };

    registerUser = (name, username, email, password) => {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ name, username, email, password })
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) return alert(data.error.reduce((message, string) =>
            message += `${string}. \n`, ''))
            this.setState(
                {
                    login: true,
                    currentUser: data 
                },
                () => {
                    localStorage.setItem('token', data.token);
                }
            );
        });
    };


render() {

    return this.state.login ? (
        <Router>
            <Header login={this.state.login} currentUser={this.state.currentUser} 
            /> 
            <Switch>
                <Route exact path="/about" component={About} /> 
                <Route 
                exact 
                path='/projects/:id' 
                render={renderProps => {
                    let foundProjectArr = document.URL.split("/");
                    let currentProject = foundProjectArr[foundProjectArr.length - 1];

                    return (
                        <ListContainer
                        {...renderProps}
                        currentProject={this.state.currentProject}
                        />
                    );
                }}
                /> 
                <Route
                exact 
                path="/"
               render={routerProps => (
                   <div className='home-container'>
                       <Sidebar /> 
                {this.state.projectsLoaded ? (
                    <ProjectContainer
                    {...routerProps}
                    currentUser={this.state.currentUser}
                    userLoggedIn={this.state.login}
                    loadCurrentProject={this.loadCurrentProject}
                    projectList={this.state.projectList}
                        />
                    ) : (
                   
                    <div>
                        <h2>Getting your Projects Together...</h2>
                    </div>
                )}
                 </div>
                )}
                />
            </Switch>
        </Router>
    ) : (
        <Router>
            <Header login={this.state.login} /> 
            <Switch>
                <Route 
                exact
                path="/login"
                render={routerProps => (
                    <Login {...routerProps} logInUser={this.logInUser} /> 
                )}
                />
                <Route 
                exact 
                path="/signup" 
                render={routerProps => (
                    <Signup {...routerProps} registerUser={this.registerUser} />
                )}
                />
                <Route
                path="/*"
                render={routerProps => (
                    <Login {...routerProps} logInUser={this.logInUser} />
                )}
                />
            </Switch>
        </Router>
        );
    }
}

export default App; 