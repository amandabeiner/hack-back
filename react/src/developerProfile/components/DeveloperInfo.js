import React from 'react';

const DeveloperInfo = props => {
  return(
    <div>
      <h3>Current Position: {props.developer.current_position}</h3>
      <h3>Bio: {props.developer.bio}</h3>
      <h3>Years of Experience: {props.developer.years_of_experience}</h3>
       <h3>Languages and skills: {props.developer.skills}</h3>
       <h3>Interests: {props.developer.interests }</h3>
    </div>
  )
}

export default DeveloperInfo;
