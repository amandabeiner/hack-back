import LayoutContainer from 'layout/containers/LayoutContainer'
import NavBar from 'layout/components/NavBar'

describe('LayoutContainer with developer', () => {
  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      if(url.endsWith('/api/v1/developers/1')) {
        return(createResponseFromFixture('developerProfile/developer'))
      } else if(url.endsWith('/api/v1/sessions')) {
        return(createResponseFromFixture('sessions/developer'))
      }
    });

    wrapper = mountReactAppAt('/developers/1/profile')
  })

  it('should render the NavBar with the correct props', done => {
    setTimeout(() => {
      expect(wrapper.find(NavBar)).toBePresent()
      expect(wrapper.find(NavBar).props().currentUser.developer).toEqual(
        {
          id: 1,
          nickname: 'michaelgt04',
          name: 'Mike Thomson',
          email: 'michaelgt04@gmail.com',
          image_url: 'https://avatars2.githubusercontent.com/u/20232897?v=3',
          github_url: 'https://github.com/michaelgt04',
          bio: 'I am a person. I write code',
          current_position: 'EE',
          years_of_experience: '1-2',
          skills: 'writing the codes',
          interests: 'dogs, pizza, food, lots of food',
          portfolio_projects: [],
          projects: []
        }
      )
      expect(wrapper.find(NavBar).props().currentUser.contact).toEqual(undefined)
      done();
    }, 0)
  })
})


describe('LayoutContainer with contact', () => {
  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      if(url.endsWith('/api/v1/organizations/1')) {
        return(createResponseFromFixture('orgProfile/organization'))
      } else if(url.endsWith('/api/v1/sessions')) {
        return(createResponseFromFixture('sessions/contact'))
      }
    });

    wrapper = mountReactAppAt('/organizations/1/profile')
  })

  it('should render the NavBar with the correct props', done => {
    setTimeout(() => {
      expect(wrapper.find(NavBar)).toBePresent()
      expect(wrapper.find(NavBar).props().currentUser.contact).toEqual(
        {
         id: 2,
         name: 'Michael Thomson',
         email: 'michaelgt04@gmail.com',
         image_url: 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg',
         organization_id: 1
        }
      )
      expect(wrapper.find(NavBar).props().currentUser.developer).toEqual(undefined)
      done();
    }, 0)
  })
})
