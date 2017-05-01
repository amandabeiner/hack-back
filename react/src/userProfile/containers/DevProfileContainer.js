import React, { Component } from 'react';
import UserProfileInfo from '../components/UserProfileInfo'
import { getUser } from '../actions/userProfile'
import { connect } from 'react-redux'

class DevProfileContainer extends Component {
  componentDidMount(){
    this.props.getUserProfile(this.props.params.id);
  }

  render() {
    let user = this.props.user

    return(
      <div>
        <UserProfileInfo user={user} />
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    user: state.user
  }
}

let mapDispatchToProps = dispatch => {
  return {
    getUserProfile: (userId) => {
      dispatch(getUser(userId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DevProfileContainer);
