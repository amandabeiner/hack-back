import React from 'react';

const Profile = props => {
  return(
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.mission_statement}</p>
      <a href={props.website}>Website</a>
    </div>
  )
}

export default Profile;
