import React, { Component } from 'react';
import { connect } from 'react-redux'
import NavBar from '../components/NavBar';
import { getCurrentUser } from '../actions/currentUser'

class LayoutContainer extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.getCurrentUser()
  }

  render(){
    return(
      <div>
        <NavBar
          currentUser={this.props.currentUser}
        />
      {this.props.children}
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    currentUser: state.currentUser.currentUser
  }
}

let mapDispatchToProps = dispatch => {
  return {
    getCurrentUser: () => {
      dispatch(getCurrentUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
