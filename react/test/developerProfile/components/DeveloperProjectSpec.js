import DeveloperProject from 'developerProfile/components/DeveloperProject';
import { Link } from 'react-router'

describe('DeveloperProject', () => {
  let projectInfo = {
    id: 2,
    name: "approved project",
    description: "is my serializer working?",
    stack: "ActiveModel Serializer",
    claimed: false,
    organization_id: 1,
    created_at: "2017-05-07T20:18:10.941Z",
    updated_at: "2017-05-07T20:18:10.941Z",
    completed: false
  }

  let wrapper = mount(
    <DeveloperProject
      project = { projectInfo }
    />
  )

  it ('renders the information about a project', () =>{
    let orgLink = wrapper.find(Link)

    expect(wrapper.text()).toMatch("approved project");
    expect(wrapper.text()).toMatch("is my serializer working?");
    expect(wrapper.text()).toMatch("In Progress");
    expect(orgLink).toBePresent();
    expect(orgLink.prop('to')).toMatch('/organizations/1/profile')
  })
})
