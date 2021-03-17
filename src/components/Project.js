import React, { Component } from 'react' 

export class Project extends Component {

    handleClick = () => {
        console.log('hello')
    }
    render() {
        const renderProjects = this.props.projects.map(project => {
            return <div onClick={this.handleClick} className="project"><h3>
                {project.name}</h3></div>
        })
        return (
            <div className='single-project-container'>
                {renderProjects}
                <div onClick={this.props.handleClick} className='project create-project'>

                    <h3>Create Project</h3>
                </div>
            </div>
        )
    }
}

export default Project 