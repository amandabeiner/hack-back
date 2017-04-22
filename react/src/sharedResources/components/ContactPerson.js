import React from 'react';

const ContactPerson = props => {
  return(
    <div>
      <h2>Contact</h2>
      <h3>{props.name}</h3>
      <a href={props.email}>{props.email}</a>
      <img src={props.imageUrl} />
    </div>
  )
}

export default ContactPerson;
