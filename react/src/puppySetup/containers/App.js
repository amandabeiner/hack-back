import React, { Component } from 'react';
import Puppy from '../components/Puppy'
import { getPuppy } from '../actions/puppy'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount(){
    this.props.getPuppies()
  }

  render() {
    let key = 0
    let puppies = this.props.puppies.map(puppy => {
      key ++
      return(
        <Puppy key={key} img={ puppy.images.fixed_height.url }/>
      )
    })

    return(
      <div>
        <h1>Puppies</h1>
        {puppies}
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    puppies: state.puppies.puppies
  }
}

let mapDispatchToProps = dispatch => {
  return {
    getPuppies: () => {
      dispatch(getPuppy())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
