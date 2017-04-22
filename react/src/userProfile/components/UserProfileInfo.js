import React from 'react';

const UserProfileInfo = props => {
  return(
    <div>
      <img src={props.user.image_url}/>
      <h1>{props.user.name}</h1>
      <h3>
        Connect on GitHub: <a href={props.user.github_url}>{props.user.nickname}</a>
      </h3>
    </div>
  )
}

export default UserProfileInfo;
