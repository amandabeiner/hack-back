import React from 'react';
import PortfolioProject from './PortfolioProject';

const UserProfileInfo = props => {
  let portfolioProjects = props.user.portfolio_projects;
  portfolioProjects = portfolioProjects.map((portfolioProject) => {
    return(
      <PortfolioProject
        key={portfolioProject.id}
        portfolioProject={portfolioProject}
      />
    );
  })

  let currentPosition = props.user.current_position ? <h3>Current position: {props.user.current_position}</h3> : null;
  let bio = props.user.bio ? <h3>Bio: {props.user.bio}</h3> : null;
  let yearsOfExperience = props.user.years_of_experience ? <h3>Years of experience: {props.user.years_of_experience}</h3> : null;
  let skills = props.user.skills ? <h3>Languages and skills: {props.user.skills}</h3> : null;
  let interests = props.user.interests ? <h3>Interests: {props.user.interests }</h3> : null;
  let projects = portfolioProjects.length > 0 ? <div><h3>Projects: </h3> {portfolioProjects}</div> : null;

  return(
    <div>
      <img src={props.user.image_url}/>
      <h1>{props.user.name}</h1>
      <h3>
        Connect on GitHub: <a href={props.user.github_url}>{props.user.nickname}</a>
      </h3>
      {currentPosition}
      {bio}
      {yearsOfExperience}
      {skills}
      {interests}
      {projects}
    </div>
  )
}

export default UserProfileInfo;
