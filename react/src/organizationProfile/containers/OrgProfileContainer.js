import React, { Component } from 'react';
import Profile from '../components/Profile'
import { getOrgProfile } from '../actions/orgProfile'
import { connect } from 'react-redux'

class OrgProfileContainer extends Component {
  componentDidMount(){
    let orgId = this.props.params.id
    this.props.getOrgProfile(orgId)
  }

  render() {
    let organization = this.props.organization

    return(
      <div>
        <Profile
          name={organization.name}
          description={organization.description}
          mission_statement={organization.mission_statement}
          website={organization.website}
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
