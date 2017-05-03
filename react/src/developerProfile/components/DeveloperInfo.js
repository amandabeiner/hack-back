import React from 'react';

const DeveloperInfo = props => {
  // <li>Languages and skills: {props.developer.skills}</li>
  // <li>Bio: {props.developer.bio}</li>
  return(
    <ul>
      <li>{props.developer.current_position}</li>
      <li>{props.developer.years_of_experience} years of experience </li>
      <li>Interested in {props.developer.interests }</li>
    </ul>
  )
}

export default DeveloperInfo;
