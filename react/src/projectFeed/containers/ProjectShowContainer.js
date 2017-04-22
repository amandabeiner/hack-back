import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getProject } from '../actions/project';
import Project from '../components/Project';
import ContactPerson from '../../sharedResources/components/ContactPerson';
import OrganizationProfile from '../../sharedResources/components/OrganizationProfile';

class ProjectShowContainer extends Component {
  componentWillMount(){
    let projectId = this.props.params.id
    this.props.getProject(projectId)
  }

  render() {
    let project = this.props.project
    let organization = project.organization
    let contact = project.contact

    return(
      <div>
        <Project
          name={project.name}
          description={project.description}
          stack={project.stack}
          claimed={project.calimed}
        />
        <OrganizationProfile
          name={organization.name}
          description={organization.description}
          missionStatement={organization.mission_statement}
          website={organization.website}
        />
        <ContactPerson
          name={contact.name}
          email={contact.email}
          imageUrl={contact.image_url}
        />
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    project: state.project.project
  }
}

let mapDispatchToProps = dispatch => {
  return {
    getProject: id => {
      dispatch(getProject(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShowContainer);
