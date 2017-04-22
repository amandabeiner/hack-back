import React from 'react';
import { Link } from 'react-router';

const ProjectTile = props => {
  let claimed = "Needs A Team!"
  if (props.claimed){
    claimed = "Has a Team"
  }
  return(
    <div>
      <Link to={`/projects/${props.id}`} ><h1>Name: {props.name}</h1></Link>
      <p>Description: {props.description}</p>
      <p>Stack: {props.stack}</p>
      <p>Claimed? {claimed}</p>
    </div>
  )
}

export default ProjectTile;
