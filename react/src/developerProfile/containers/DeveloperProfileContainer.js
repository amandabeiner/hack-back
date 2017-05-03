import React, { Component } from 'react';
import DeveloperProfile from '../components/DeveloperProfile'
import { getDeveloper } from '../actions/developerProfile'
import { connect } from 'react-redux'

class DeveloperProfileContainer extends Component {
  componentDidMount(){
    this.props.getDeveloperProfile(this.props.params.id);
  }

  render() {
    let developer = this.props.developer

    return(
      <div className="dev-profile-wrapper">
        <DeveloperProfile developer={developer} />
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    developer: state.developer
  }
}

let mapDispatchToProps = dispatch => {
  return {
    getDeveloperProfile: (developerId) => {
      dispatch(getDeveloper(developerId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeveloperProfileContainer);
