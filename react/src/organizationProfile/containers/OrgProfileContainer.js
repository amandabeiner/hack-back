import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getOrgProfile } from '../actions/orgProfile';
import OrganizationProfile from '../../sharedResources/components/OrganizationProfile';
import ContactPerson from '../../sharedResources/components/ContactPerson';

class OrgProfileContainer extends Component {
  componentDidMount(){
    let orgId = this.props.params.id
    this.props.getOrgProfile(orgId)
  }

  render() {
    let organization = this.props.organization
    let contact = organization.contact
    debugger;

    return(
      <div>
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
