import React, { Component } from 'react';
import DeveloperProfile from '../components/DeveloperProfile'
import { getDeveloper } from '../actions/developerProfile'
import { displayNextReviews } from '../actions/displayReviews'
import { hideExtraReviews } from '../actions/displayReviews'
import { connect } from 'react-redux'

class DeveloperProfileContainer extends Component {
  componentDidMount(){
    this.props.getDeveloperProfile(this.props.params.id);
  }

  render() {
    let developer = this.props.developer

    return(
      <div className="dev-profile-wrapper">
        <DeveloperProfile
          developer={developer}
          displayNextReviews={this.props.displayNextReviews}
          hideExtraReviews={this.props.hideExtraReviews}
        />
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
    },
    displayNextReviews: () => {
      dispatch(displayNextReviews())
    },
    hideExtraReviews: () => {
      dispatch(hideExtraReviews())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeveloperProfileContainer);
