import React from 'react';
import PortfolioProject from './PortfolioProject';
import DeveloperInfo from './DeveloperInfo';
import DeveloperBio from './DeveloperBio';
import DeveloperSkills from './DeveloperSkills';
import DeveloperProject from './DeveloperProject';
import DeveloperReview from './DeveloperReview';

const DeveloperProfile = props => {
  let sum = 0
  let allReviews = props.developer.reviews
  let average;
  let tmpAvg = [];
  let i;

  allReviews.map(review => {
    sum += review.professionalism
    sum += review.timeliness
    sum += review.tech_skills
  })

  let unroundedAvg = sum/((props.developer.reviews.length)*3)
  average = Math.floor(unroundedAvg)


  for(i = 1; i <= props.average; i++){
    tmpAvg.push(i)
  }

  let portProjects = props.developer.portfolio_projects;
  let portfolioProjects = portProjects.map((portfolioProject) => {
    return(
      <PortfolioProject
        key={portfolioProject.id}
        portfolioProject={portfolioProject}
      />
    );
  })

  let skills = props.developer.skills.split(',')
  let developerSkills = skills.map(skill => {
    return(
      <DeveloperSkills
        key={skill}
        skill={skill}
      />
    );
  })

  let projects = props.developer.projects.map(project => {
    return(
      <DeveloperProject
        key={project.id}
        project={project}
      />
    )
  })

  let displayedReviews = props.developer.reviews.filter(review => {
    return props.developer.reviews.indexOf(review) <= props.developer.lastVisibleReviewIndex
  })

  let reviews = displayedReviews.map(review => {
    return(
      <DeveloperReview
        key={review.id}
        review={review}
        average={average}
      />
    )
  })

  let moreReviewsButton;
  if (props.developer.reviews.length > props.developer.lastVisibleReviewIndex){
    moreReviewsButton = <button onClick={props.displayNextReviews}>Get More Reviews</button>
  }

  let hideReviewsButton;
  if (props.developer.lastVisibleReviewIndex > 4){
    hideReviewsButton = <button onClick={props.hideExtraReviews}>See Less</button>
  }


  return(

    <div className="dev-profile-container">
      <div className="orange-background">
        <div className="basic-info">
          <img className="dev-photo" src={props.developer.image_url}/>
          <h1 className="dev-name">{props.developer.name}</h1>
          <DeveloperInfo
            developer={props.developer}
            average = {average}
          />
        </div>
      </div>

      <div className="gray-background">
        <div className="more-info row">
          <div className="bio-skills column small-12 medium-4">
            <div className="bio content-box column small-12">
              <h3 className="subtitle">Bio</h3>
              <DeveloperBio
                bio={props.developer.bio}
              />
            </div>
            <div className="skills content-box column small-12">
              <h3 className="subtitle">Skills</h3>
              <ul>
                {developerSkills}
              </ul>
            </div>
          </div>

          <div className="projects column small-12 medium-7 medium-offset-1">
            <h2>Portfolio</h2>
            {portfolioProjects}
          </div>

          <div className="projects column small-12 medium-7">
            <h2>Recent Projects</h2>
            {projects}
          </div>

          <div className="projects column small-12 medium-4">
            <h2>Reviews ({props.developer.reviews.length})</h2>
            {reviews}
            {moreReviewsButton}
            {hideReviewsButton}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeveloperProfile;
