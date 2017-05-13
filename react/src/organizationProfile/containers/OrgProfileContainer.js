import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getOrgProfile } from '../actions/orgProfile';
import OrganizationProfile from '../../sharedResources/components/OrganizationProfile';
import ContactPerson from '../../sharedResources/components/ContactPerson';
import OrganizationDescription from '../../sharedResources/components/OrganizationDescription';
import OrgProject from '../components/OrgProject';

class OrgProfileContainer extends Component {
  componentDidMount(){
    let orgId = this.props.params.id
    this.props.getOrgProfile(orgId)
  }

  render() {
    let organization = this.props.organization
    let contact = organization.contact
    let projects = organization.projects.map(project => {
      return(
        <OrgProject
          key={project.id}
          project={project}
        />
      )
    })



    return(
      <div className='org-profile-wrapper'>
        <div className='dark-grey-background'>
          <div className='row'>
            <div className='org-info small-12 columns'>
              <OrganizationProfile
                name={organization.name}
                missionStatement={organization.mission_statement}
                website={organization.website}
              />
            </div>
          </div>
        </div>
        <div className='off-white-background'>
          <div className='row'>
            <div className='small-12 medium-8 columns'>
              <OrganizationDescription
                description={organization.description}
              />
            </div>
            <div className='small-12 medium-4 columns'>
              <ContactPerson
                name={contact.name}
                email={contact.email}
                imageUrl={contact.image_url}
              />
            </div>
          </div>
          <div className='row'>
            <div className='small-12 columns'>
              <h2>Projects</h2>
              {projects}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    organization: state.orgProfile.organization
  }
}

let mapDispatchToProps = dispatch => {
  return {
    getOrgProfile: id => {
      dispatch(getOrgProfile(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrgProfileContainer);
