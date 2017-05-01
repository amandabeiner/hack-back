import Project from 'projectFeed/components/Project';
import ContactPerson from 'sharedResources/components/ContactPerson';
import OrganizationProfile from 'sharedResources/components/OrganizationProfile';

describe('ProjectShowContainer', () => {

  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      if(url.endsWith('/api/v1/projects/1')) {
        return(createResponseFromFixture('projectFeed/project'))
      }
    });

    wrapper = mountReactAppAt('/projects/1')
  });

  it('should render a Project component with the correct props', done => {
    setTimeout(() => {
      expect(wrapper.find(Project)).toBePresent()
      expect(wrapper.find(Project).props()).toEqual(
        {
          name: 'test project',
          description: 'test ability to make a project',
          stack: 'json',
          claimed: false
        }
      )
      done();
    }, 0);
  });

  it('should render a ContactPerson component with the correct props', done => {
    setTimeout(() => {
      expect(wrapper.find(ContactPerson)).toBePresent()
      expect(wrapper.find(ContactPerson).props()).toEqual(
        {
          name: 'Amanda Beiner',
          email: 'aebeiner@gmail.com',
          imageUrl: 'https://lh6.googleusercontent.com/-Uch-KItz22s/AAAAAAAAAAI/AAAAAAAAAbM/FDaKNpvv504/photo.jpg'
        }
      )
      done()
    }, 0)
  });

  it('should render an OrganizationProfile component', done => {
    setTimeout(() => {
      expect(wrapper.find(OrganizationProfile)).toBePresent()
      expect(wrapper.find(OrganizationProfile).props()).toEqual(
        {
          name: 'Test Org',
          description: 'testing json all day',
          missionStatement: 'to test things thoroughly',
          website: 'www.jsontest.org'
        }
      )
      done()
    }, 0)
  });
})
