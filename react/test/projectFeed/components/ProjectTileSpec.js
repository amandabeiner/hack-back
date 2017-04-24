import React from 'react';
import { Link } from 'react-router';
import ProjectTile from 'projectFeed/components/ProjectTile';

describe('ProjectTile', () =>{
  let projectTile = mount(
    <ProjectTile
      name={"Totally awesome project"}
      description={"it is the most awesome"}
      stack={"sinatra/react"}
      claimed={true}
    />
  )
  it('displays a preview of the project stats', () =>{
    console.log(projectTile.text())
    expect(projectTile.text()).toMatch('Totally awesome project')
    expect(projectTile.text()).toMatch('it is the most awesome')
    expect(projectTile.text()).toMatch('sinatra/react')
    expect(projectTile.text()).toMatch('Has a Team')
  })

  it('displays a link to the project show page', () => {
    let link = projectTile.find(Link)
    expect(link).toBePresent()
    // expect(projectTile.text()).toMatch("<Link />")
  })
})
