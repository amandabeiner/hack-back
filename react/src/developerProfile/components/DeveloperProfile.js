import React from 'react';
import PortfolioProject from './PortfolioProject';
import DeveloperInfo from './DeveloperInfo';
import DeveloperBio from './DeveloperBio';
import DeveloperSkills from './DeveloperSkills';
import DeveloperProject from './DeveloperProject';

const DeveloperProfile = props => {
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

  return(

    <div className="dev-profile-container">
      <div className="orange-background">
        <div className="basic-info">
          <img className="dev-photo" src={props.developer.image_url}/>
          <h1 className="dev-name">{props.developer.name}</h1>
          <DeveloperInfo developer={props.developer} />
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

          <div className="projects small-12">
            <h2>Recent Projects</h2>
            {projects}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeveloperProfile;
