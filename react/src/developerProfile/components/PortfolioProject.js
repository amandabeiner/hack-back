import React from 'react';

const PortfolioProject = props => {
  let name = props.portfolioProject.name ? <h3 className="subtitle">{props.portfolioProject.name}</h3> : null;
  let description = props.portfolioProject.description ? <li>Description: {props.portfolioProject.description}</li> : null;
  let githubUrl, sourceUrl;
  if (props.portfolioProject.github_url){
    githubUrl = <li>GitHub Repo: <a href={props.portfolioProject.github_url}>{props.portfolioProject.github_url}</a></li>
  }
  if (props.portfolioProject.source_url){
    sourceUrl = <li>Website URL: <a href={props.portfolioProject.source_url}>{props.portfolioProject.source_url}</a></li>
  }

  return(
    <div className="portfolio-project-tile">
    {name}
      <ul>
        {description}
        {githubUrl}
        {sourceUrl}
      </ul>
    </div>
  )
}

export default PortfolioProject;
