import React from 'react';

const OrganizationDescription = props => {
  return(
    <div>
      <h2>What We Do</h2>
      <p>{props.description}</p>
    </div>
  )
}

export default OrganizationDescription;
