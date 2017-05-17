import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getAllProjects } from '../actions/project';
import ProjectTile from '../components/ProjectTile'

class ProjectIndexContainer extends Component {
  componentDidMount(){
    this.props.getAllProjects()
  }

  render() {
    let allProjects = this.props.allProjects

    let projects = allProjects.map(project => {
      return(
        <ProjectTile
          key={project.id}
          id={project.id}
          name={project.name}
          description={project.description}
          claimed={project.claimed}
          stack={project.stack}
        />
      )
    })

    return(
      <div className='projects-index'>
        <h1>Project Index</h1>
        {projects}
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    allProjects: state.project.allProjects
  }
}

let mapDispatchToProps = dispatch => {
  return {
    getAllProjects: () => {
      dispatch(getAllProjects())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndexContainer);
