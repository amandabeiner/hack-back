import OrgProfileContainer from 'organizationProfile/containers/OrgProfileContainer'
import OrganizationProfile from 'sharedResources/components/OrganizationProfile'
import ContactPerson from 'sharedResources/components/ContactPerson'

describe('OrgProfileContainer', () => {

  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      if(url.endsWith('/api/v1/organizations/1')) {
        return(createResponseFromFixture('orgProfile/organization'))
      }
    });

    wrapper = mountReactAppAt('/organizations/1/profile')
  });

  it('should render a organization profile with the correct props', done => {
    setTimeout(() => {
      expect(wrapper.find(OrganizationProfile)).toBePresent()
      expect(wrapper.find(OrganizationProfile).props()).toEqual(
        {
          name: 'Hack Back',
          description: 'a website hopefully',
          missionStatement: 'hacking back',
          website: 'lol'
        }
      )
      done();
    }, 0);
  });

  it('should render a developer profile with the correct props', done => {
    setTimeout(() => {
      expect(wrapper.find(ContactPerson)).toBePresent()
      expect(wrapper.find(ContactPerson).props()).toEqual(
        {
          name: 'Michael Thomson',
          email: 'michaelgt04@gmail.com',
          imageUrl: 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg'
        }
      )
      done();
    }, 0)
  })
})
