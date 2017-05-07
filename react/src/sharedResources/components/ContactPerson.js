import React from 'react';

const ContactPerson = props => {
  return(
    <div className='row'>
      <h2 className='small-12 columns'>Contact</h2>
      <div className='small-4 columns'>
        <img className='contact-image' src={props.imageUrl} />
      </div>
      <div className='small-8 columns'>
        <h4 className='contact-name'>{props.name}</h4>
        <a className='contact-email' href={props.email}>{props.email}</a>
      </div>
    </div>
  )
}

export default ContactPerson;
