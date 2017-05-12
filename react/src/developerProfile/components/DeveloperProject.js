import React from 'react';
import { Link } from 'react-router';

const DeveloperProject = props => {
  let completeText;
  if(props.project.completed) {
    completeText = "Complete"
  } else {
    completeText = "In Progress"
  }

  return(
    <div className="">
      <h3 className="">{props.project.name}</h3>
      <ul>
        <li className="">{props.project.description}</li>
        <li><i className="fa fa-stack-overflow" aria-hidden="true"></i> {props.project.stack}</li>
        <li><i className="fa fa-globe" aria-hidden="true"></i><h4>Project Link</h4></li>
        <li>{completeText}</li>
      </ul>
    </div>
  )
}

export default DeveloperProject;
