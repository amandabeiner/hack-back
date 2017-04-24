import ProjectShowContainer from 'projectFeed/containers/ProjectShowContainer';
import Project from 'projectFeed/components/Project'

xdescribe('ProjectShowContainer', () => {
  let wrapper;

  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      if(url.endsWith('/api/v1/projects/1')) {
        return(createResponseFromFixture('projectFeed/project'))
      }
    });

    wrapper = shallow(
      <ProjectShowContainer />
    )
  });

  it('should render a Project component', done => {
    setTimeout(() => {
      console.log(wrapper)
      expect(wrapper.find(Project)).toBePresent();
      done();
    }, 0);
  });



})
