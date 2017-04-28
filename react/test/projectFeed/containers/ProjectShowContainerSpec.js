import ProjectShowContainer from 'projectFeed/containers/ProjectShowContainer';
import Project from 'projectFeed/components/Project'

describe('ProjectShowContainer', () => {

  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      if(url.endsWith('/api/v1/projects/1')) {
        return(createResponseFromFixture('projectFeed/project'))
      }
    });

    wrapper = mountReactAppAt('/projects/1')
  });

  it('should render a Project component', done => {
    setTimeout(() => {
      debugger;
      expect(wrapper.find(Project)).toBePresent();
      done();
    }, 0);
  });



})
