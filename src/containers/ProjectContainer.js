import React, { Component } from 'react';
import Project from "../components/Project";

class ProjectContainer extends Component {

    state = {
        projectList: this.props.projectList
    };


    handleClick = () => {
        this.setState({
            projectList: [{ name: "New Project" }, ...this.state.projectList]
        });
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
                    />
            </div>
        );
    }
}

export default ProjectContainer;