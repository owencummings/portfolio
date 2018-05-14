import React, { Component } from 'react';

class Project extends Component{


  render(){
    const style1={
      color: '#0d0d0d'
    }

    const style2={
      color: '#0d0d0d'
    }

    const project = this.props.project
    return(
      <div className='projectContainer'>
        <div className='flexElement projectTitle'>
          <div className='projectTitleText'>
          {project.title}
          </div>
          <div className="iconContainer">
            {project.hasLive &&
              <a href={project.liveUrl} target='_blank' >
                <i className="far fa-lightbulb"></i>
              </a>
            }
            <a href={project.githubUrl} target='_blank'>
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className='flexElement projectDescription'>
          {project.description}
        </div>
        <div className='flexElement projectUsed'>
          <div>
          {project.usedTechnologies.join(' | ')}
          </div>

        </div>
      </div>
    )
  }
}

export default Project
