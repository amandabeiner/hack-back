import OrgProfileContainer from 'organizationProfile/containers/OrgProfileContainer'
import OrganizationProfile from 'sharedResources/components/OrganizationProfile'
import ContactPerson from 'sharedResources/components/ContactPerson'
import OrgProject from 'organizationProfile/components/OrgProject'

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
          missionStatement: 'Time to use technology for good!',
          website: 'lol'
        }
      )
      done();
    }, 0);
  });

  it('should render a contact person profile with the correct props', done => {
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

  it('should render a fragment of org projects with the correct props', done => {
    setTimeout(() => {
      expect(wrapper.find(OrgProject)).toBePresent()
      expect(wrapper.find(OrgProject).length).toEqual(3)
      expect(wrapper.find(OrgProject).first().props()).toEqual(
        {
          project:
          {
            id: 1,
            name: 'website please help',
            description: 'make a website.',
            stack: 'html/css', claimed: false,
            organization_id: 1,
            created_at: '2017-04-22T19:30:21.404Z',
            updated_at: '2017-04-22T19:30:21.404Z',
            completed: false
          }
        }
      )
      done();
    }, 0)
  })
})
