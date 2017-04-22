import React, { Component } from 'react';
import UserProfileInfo from '../components/UserProfileInfo'
// import { getPuppy } from '../actions/puppy'
import { getUser } from '../actions/userProfile'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount(){
    // this.props.getPuppies();
    this.props.getUserProfile();
  }

  render() {

    let user = this.props.user.user ? this.props.user.user : null;

    let userProfileInfo = user ? <UserProfileInfo user={user}/> : null;

    return(
      <div>
        {userProfileInfo}
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    // puppies: state.puppies.puppies
    user: state.user
  }
}

let mapDispatchToProps = dispatch => {
  return {
    // getPuppies: () => {
    //   dispatch(getPuppy())
    // }
    getUserProfile: () => {
      dispatch(getUser());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
