import React from 'react';
import Project from 'projectFeed/components/Project';


describe('Project', () => {
  it('displays the basic project info', () => {
    let project = shallow(
      <Project
        name={"Totally awesome project"}
        description={"it is the most awesome"}
        stack={"sinatra/react"}
        claimed={true}
      />
    )

    expect(project.text()).toMatch('Totally awesome project')
    expect(project.text()).toMatch('it is the most awesome')
    expect(project.text()).toMatch('sinatra/react')
    expect(project.text()).toMatch('Has a Team')
  })
})
