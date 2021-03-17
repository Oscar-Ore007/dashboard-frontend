import React, { Component } from 'react' 

export class Project extends Component {

    handleClick = (evt, projectId) => {
        this.props.loadCurrentProject(projectId)
    }
    render() {
        const renderProjects = this.props.projects.map(project => {
            return <Link to={`/projects/${project.id}`}><div onClick={evt =>
            this.handleClick(evt, project.id)} className="project"><h3>
                {project.name}</h3></div></Link>
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