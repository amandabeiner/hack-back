import React from 'react';

const ContactPerson = props => {
  return(
    <div className='row'>
      <h2>Contact</h2>
      <img className='contact-image small-6 medium-4 columns' src={props.imageUrl} />
      <div className='small-12 medium-8 columns'>
        <h4 className='contact-name'>{props.name}</h4>
        <a className='contact-email' href={props.email}>{props.email}</a>
      </div>
    </div>
  )
}

export default ContactPerson;
