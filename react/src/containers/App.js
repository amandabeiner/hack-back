import React, { Component } from 'react';
import Puppy from '../components/Puppy'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <Puppy img={ this.props.puppies[0].url }/>
    )
  }
}

let mapStateToProps = state => {
  return {
    puppies: state.puppies
  }
}

export default connect(mapStateToProps)(App);
