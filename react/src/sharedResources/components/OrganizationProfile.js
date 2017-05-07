import React from 'react';

const OrganizationProfile = props => {
  return(
    <div>
      <img className='org-logo' src='https://s-media-cache-ak0.pinimg.com/736x/17/95/5a/17955a21ce0f1dd27adb9e1bdf204026.jpg'/>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.missionStatement}</p>
      <a href={props.website}>Website</a>
    </div>
  )
}

export default OrganizationProfile;
