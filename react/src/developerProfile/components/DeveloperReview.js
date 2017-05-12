import React from 'react';
import Star from './Star';

const DeveloperReview = props => {
  debugger;
  let professionalism;
  let timeliness;
  let techSkills;
  let i;
  let tmpProf = [];
  let tmpTime = [];
  let tmpTech = [];
  

  for(i = 1; i <= props.review.professionalism; i++){
    tmpProf.push(i)
  }

  professionalism = tmpProf.map(star => {
    return(
      <Star
        key={star}
        className='sub-rating'
      />
    )
  })

  for(i = 1; i <= props.review.timeliness; i++){
    tmpTime.push(i)
  }

  timeliness = tmpTime.map(star => {
    return(
      <Star
        key={star}
        className='sub-rating'
      />
    )
  })

  for(i = 1; i <= props.review.tech_skills; i++){
    tmpTech.push(i)
  }

  techSkills = tmpTech.map(star => {
    return(
      <Star
        key={star}
        className='sub-rating'
      />
    )
  })

  return(
    <div className="content-box review-tile">
      <div>
        <span>Professionalism:</span>
        {professionalism}
      </div>
      <div>
        <span>Timeliness:</span>
        {timeliness}
      </div>
      <div>
        <span>Technical Skill:</span>
        {techSkills}
      </div>
      <div>
        <p>{props.review.review}</p>
      </div>
    </div>
  )
}

export default DeveloperReview;
