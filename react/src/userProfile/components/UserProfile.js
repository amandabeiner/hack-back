import React from 'react';
import PortfolioProject from './PortfolioProject';
import UserInfo from './UserInfo';

const UserProfile = props => {
  let portfolioProjects = props.user.portfolio_projects;
  portfolioProjects = portfolioProjects.map((portfolioProject) => {
    return(
      <PortfolioProject
        key={portfolioProject.id}
        portfolioProject={portfolioProject}
      />
    );
  })

  // let currentPosition = props.user.current_position ? <h3>Current position: {props.user.current_position}</h3> : null;
  // let bio = props.user.bio ? <h3>Bio: {props.user.bio}</h3> : null;
  // let yearsOfExperience = props.user.years_of_experience ? <h3>Years of experience: {props.user.years_of_experience}</h3> : null;
  // let skills = props.user.skills ? <h3>Languages and skills: {props.user.skills}</h3> : null;
  // let interests = props.user.interests ? <h3>Interests: {props.user.interests }</h3> : null;
  // let projects = portfolioProjects.length > 0 ? <div><h3>Projects: </h3> {portfolioProjects}</div> : null;

  // Connect on GitHub: <a href={props.user.github_url}>{props.user.nickname}</a>
  return(
    <div>
      <img src={props.user.image_url}/>
      <h1>{props.user.name}</h1>
      <UserInfo
        user={props.user}
      />
      {portfolioProjects}
    </div>
  )
}

export default UserProfile;
