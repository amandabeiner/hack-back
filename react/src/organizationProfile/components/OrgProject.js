import React from 'react';
import { Link } from 'react-router';

const OrgProject = props => {
  let completeText;
  if(props.project.completed) {
    completeText = "Complete"
  } else {
    completeText = "In Progress"
  }

  return(
    <div className="project-tile content-box">
      <h3 className="subtitle">{props.project.name}</h3>
      <ul>
        <li className="project-description">{props.project.description}</li>
        <li><i className="fa fa-stack-overflow" aria-hidden="true"></i> {props.project.stack}</li>
        <li><i className="fa fa-globe" aria-hidden="true"></i> <Link to={`/organizations/${props.project.organization_id}/profile`}>Organization Profile</Link></li>
        <li>{completeText}</li>
      </ul>
    </div>
  )
}

export default OrgProject;
