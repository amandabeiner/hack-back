import React from 'react';
import { Link } from 'react-router';

const NavBar = props => {
  let profileLink;
  if (props.currentUser.developer){
    profileLink = <Link to={`/developers/${props.currentUser.developer.id}/profile`}>My Profile</Link>
  } else if (props.currentUser.contact){
    profileLink = <Link to={`/organizations/${props.currentUser.contact.organization_id}/profile`}>My Profile</Link>
  }
  return(
    <div className='nav-bar'>
      <a href='/logout'>Logout</a>
      <Link to='/projects'>Projects</Link>
      <Link to='/dashboard'>Dashboard</Link>
      {profileLink}
    </div>
  )
}

export default NavBar;
