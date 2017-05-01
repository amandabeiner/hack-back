import React from 'react';
import PortfolioProject from './PortfolioProject';
import DeveloperInfo from './DeveloperInfo';

const DeveloperProfile = props => {
  let portfolioProjects = props.developer.portfolio_projects;
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
      <img src={props.developer.image_url}/>
      <h1>{props.developer.name}</h1>
      <DeveloperInfo developer={props.developer} />
      {portfolioProjects}
    </div>
  )
}

export default DeveloperProfile;
