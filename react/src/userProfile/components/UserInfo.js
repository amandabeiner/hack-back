import React from 'react';

const UserInfo = props => {
  return(
    <div>
      <h3>Current Position: {props.user.current_position}</h3>
      <h3>Bio: {props.user.bio}</h3>
      <h3>Years of experience: {props.user.years_of_experience}</h3>
       <h3>Languages and skills: {props.user.skills}</h3>
       <h3>Interests: {props.user.interests }</h3>
    </div>
  )
}

export default UserInfo;
