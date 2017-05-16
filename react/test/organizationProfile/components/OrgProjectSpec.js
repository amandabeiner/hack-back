import OrgProject from 'organizationProfile/components/OrgProject'

describe('OrgProject', () => {
  let data =
    {
      id: 1,
      name: 'website please help',
      description: 'make a website.',
      stack: 'html/css',
      claimed: false,
      organization_id: 1,
      created_at: '2017-04-22T19:30:21.404Z',
      updated_at: '2017-04-22T19:30:21.404Z',
      completed: false
    }

  let wrapper = shallow(
    <OrgProject
      key={data.id}
      project={data}
    />
  )

  it('should render the basic info for the proifle when a project is in progress', () => {
    expect(wrapper.find('h3').text()).toEqual('website please help')
    expect(wrapper.text()).toMatch('make a website')
    expect(wrapper.text()).toMatch('html/css')
    expect(wrapper.text()).toMatch('In Progress')
  })

  it('should render that a project is finished when it is done', () => {
    let finishedProject =
      {
        id: 1,
        name: 'website please help',
        description: 'make a website.',
        stack: 'html/css',
        claimed: false,
        organization_id: 1,
        created_at: '2017-04-22T19:30:21.404Z',
        updated_at: '2017-04-22T19:30:21.404Z',
        completed: true
      }

    let finished = shallow(
      <OrgProject
        key={finishedProject.id}
        project={finishedProject}
      />
    )
    expect(finished.text()).toMatch('Complete')
  })
})
