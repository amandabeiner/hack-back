import React, { Component } from 'react';
import UserProfile from '../components/UserProfile'
import { getUser } from '../actions/userProfile'
import { connect } from 'react-redux'

class DevProfileContainer extends Component {
  componentDidMount(){
    this.props.getUserProfile(this.props.params.id);
  }

  render() {
    debugger;
    let user = this.props.user
    //
    // let userProfileInfo = user ? <UserProfile user={user}/> : null;

    return(
      <div>
        <UserProfile user={user.user} />
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    user: state.user.user.user.user
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
