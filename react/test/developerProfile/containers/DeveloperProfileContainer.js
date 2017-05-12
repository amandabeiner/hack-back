import DeveloperProfile from 'developerProfile/components/DeveloperProfile'

describe('DeveloperProfileContainer', () => {

  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      if(url.endsWith('/api/v1/developers/1')) {
        return(createResponseFromFixture('developerProfile/developer'))
      }
    });

    wrapper = mountReactAppAt('/developers/1/profile')
  });

  it('should render a developer profile with the correct props', done => {
    setTimeout(() => {
      expect(wrapper.find(DeveloperProfile)).toBePresent()
      expect(wrapper.find(DeveloperProfile).props()).toEqual(
        { developer:
          { id: 1,
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
            projects: [],
            reviews: []
          }
        }
      )
      done();
    }, 0);
  });
})
