import ProjectTile from 'projectFeed/components/ProjectTile';

describe('ProjectIndexContainer', () => {

  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      if(url.endsWith('/api/v1/projects')) {
        return(createResponseFromFixture('projectFeed/projects'))
      } else if(url.endsWith('/api/v1/sessions')) {
        return(createResponseFromFixture('sessions/developer'))
      }
    });

    wrapper = mountReactAppAt('/projects')
  });

  it('should render a fragment of ProjectTile components with the correct props', done => {
    setTimeout(() => {
      expect(wrapper.find(ProjectTile).length).toEqual(2)
      expect(wrapper.find(ProjectTile).first().props()).toEqual(
        {
          id: 1,
          name: 'Build something',
          description: 'Build something cooler than your friends',
          claimed: false,
          stack: 'None of your business'
        }
      )
      done();
    }, 0);
  });

  it('should have a title for the page', done => {
    setTimeout(() => {
      expect(wrapper.find('h1').first().text()).toMatch('Project Index')
      done();
    }, 0)
  })
})
