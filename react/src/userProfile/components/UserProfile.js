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

  return(
    <div>
      <img src={props.user.image_url}/>
      <h1>{props.user.name}</h1>
      <UserInfo user={props.user} />
      {portfolioProjects}
    </div>
  )
}

export default UserProfile;
