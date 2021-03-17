import React, { Component } from 'react';
import Project from "../components/Project";

class ProjectContainer extends Component {

    state = {
        projectList: this.props.projectList
    };


    // handleClick = () => {
    //     this.setState({
    //         projectList: [{ name: "New Project" }, ...this.state.projectList]
    //     });
    createNewProject = (name) => {
        const user_id = this.props.currentuser.user_id
        fetch("http://localhost:3000/projects", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": localStorage.token
            },
            body: JSON.stringify({ user_id, name })
        })
        .then(res => res.json())
        .then(projectData => {
            if (projectData.errors)
            this.setState({
                projectList: [{ name }, ...this.state.projectList]
            });
        })
    };
    render() {
        return (
            <div className="project-container">
                <div>
                <h2> All Projects </h2>
                </div>
                    <Project 
                    currentProject={this.props.currentProject}
                    projects={this.state.projectList} 
                    handleClick={this.handleClick} 
                    loadCurrentProject={this.props.loadCurrentProject}
                    renderProjectForm={this.renderProjectForm}
                    createNewProject={this.createNewProject}
                    />
            </div>
        );
    }
}

export default ProjectContainer;