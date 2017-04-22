import React from 'react';

const OrganizationProfile = props => {
  return(
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.missionStatement}</p>
      <a href={props.website}>Website</a>
    </div>
  )
}

export default OrganizationProfile;
