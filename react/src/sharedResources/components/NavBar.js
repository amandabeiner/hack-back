import React from 'react';
import { Link } from 'react-router';

const NavBar = props => {
  let handleLogout = event => {
    event.preventDefault()
    window.location.href = '/logout'
  }

  let profileLink;
  if (props.currentUser.developer){
    profileLink = <Link to={`/developers/${props.currentUser.developer.id}/profile`}>My Profile</Link>
  } else if (props.currentUser.contact){
    profileLink = <Link to={`/organizations/${props.currentUser.contact.organization_id}/profile`}>My Profile</Link>
  }
  return(
    <div>
      <a href='' onClick={handleLogout}>Logout</a>
      <Link to='/projects'>Projects</Link>
      <Link to='/dashboard'>Dashboard</Link>
      {profileLink}
    </div>
  )
}

export default NavBar;
