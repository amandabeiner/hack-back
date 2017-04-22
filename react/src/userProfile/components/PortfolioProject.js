import React from 'react';

const PortfolioProject = props => {
  let name = props.portfolioProject.name ? <h3>{props.portfolioProject.name}</h3> : null;
  let description = props.portfolioProject.description ? <li>Description: {props.portfolioProject.description}</li> : null;
  let githubUrl = props.portfolioProject.github_url ? <li>GitHub Repo: <a href={props.portfolioProject.github_url}>{props.portfolioProject.github_url}</a></li> : null;
  let sourceUrl = props.portfolioProject.source_url ? <li>Website URL: <a href={props.portfolioProject.source_url}>{props.portfolioProject.source_url}</a></li> : null;

  return(
    <div>
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
