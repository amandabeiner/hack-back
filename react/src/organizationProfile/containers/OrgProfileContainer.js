import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getOrgProfile } from '../actions/orgProfile';
import Profile from '../components/Profile';
import ContactPerson from '../components/ContactPerson';

class OrgProfileContainer extends Component {
  componentDidMount(){
    let orgId = this.props.params.id
    this.props.getOrgProfile(orgId)
  }

  render() {
    let organization = this.props.organization
    let user = this.props.organization.user

    return(
      <div>
        <Profile
          name={organization.name}
          description={organization.description}
          mission_statement={organization.mission_statement}
          website={organization.website}
        />
        <ContactPerson
          name={user.name}
          email={user.email}
          imageUrl={user.image_url}
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
