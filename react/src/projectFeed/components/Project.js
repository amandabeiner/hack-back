import React from 'react';

const Project = props => {
  let claimed = "Needs A Team!"
  if (props.claimed){
    claimed = "Has a Team"
  }
  return(
    <div>
      <h1>Name: {props.name}</h1>
      <p>Description: {props.description}</p>
      <p>Stack: {props.stack}</p>
      <p>Claimed? {claimed}</p>
    </div>
  )
}

export default Project;
