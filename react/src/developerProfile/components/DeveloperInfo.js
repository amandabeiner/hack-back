import React from 'react';
import Star from './Star';

const DeveloperInfo = props => {
  let average;
  let tmpAvg = [];
  let i;

  for(i = 1; i <= props.average; i++){
    tmpAvg.push(i)
  }

  average = tmpAvg.map(star => {
    return(
      <Star
        key={star}
        className='average-rating-header'
      />
    )
  })

  return(
    <ul>
      <li className='average-rating'>{average}</li>
      <li>{props.developer.current_position}</li>
      <li>{props.developer.years_of_experience} years of experience </li>
      <li>Interested in {props.developer.interests }</li>
    </ul>
  )
}

export default DeveloperInfo;
