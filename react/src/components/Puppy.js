import React from 'react';

const Puppy = props => {
  return(
    <div>
      <h1>Puppy!</h1>
      <img src={props.img} />
    </div>
  )
}

export default Puppy;
