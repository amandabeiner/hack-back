import DeveloperProfile from 'developerProfile/components/DeveloperProfile';
import DeveloperInfo from 'developerProfile/components/DeveloperInfo';
import PortfolioProject from 'developerProfile/components/PortfolioProject';
import DeveloperBio from 'developerProfile/components/DeveloperBio';
import DeveloperSkills from 'developerProfile/components/DeveloperSkills';
import DeveloperProject from 'developerProfile/components/DeveloperProject';

describe('DeveloperProfile', () => {
  let userData =   {
    user: {
      id: 2,
      nickname: null,
      name: "Amanda Beiner",
      email: "aebeiner@gmail.com",
      image_url: "https://lh6.googleusercontent.com/-Uch-KItz22s/AAAAAAAAAAI/AAAAAAAAAbM/FDaKNpvv504/photo.jpg",
      github_url: "http://github.com/amandabeiner",
      role: "developer",
      created_at: "2017-04-24T20:34:11.075Z",
      updated_at: "2017-04-24T20:34:11.083Z",
      bio: "pugs",
      current_position: "dog",
      years_of_experience: "1-2",
      skills: "sniffing things",
      interests: "ball? ball!",
      portfolio_projects: [
        {
          id: 1,
          name: "Ok-Kyle",
          description: "Ever more Kyle. Theres a Kyle for that.",
          source_url: "https://ok-kyle.herokuapp.com/",
          github_url: "https://github.com/michaelgt04/ok-kyle"
        }
      ],
      projects: [
        {
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
      ],
      reviews: []
    }
  }

  let wrapper = shallow(
    <DeveloperProfile
      developer={userData.user}
    />
  );

  it("renders the user's name and profile photo",() => {
    let userImage = wrapper.find('img')

    expect(wrapper.text()).toMatch('Amanda Beiner')
    expect(userImage).toBePresent();
    expect(userImage.prop('src')).toEqual('https://lh6.googleusercontent.com/-Uch-KItz22s/AAAAAAAAAAI/AAAAAAAAAbM/FDaKNpvv504/photo.jpg')
  })


  it("renders a DeveloperInfo component", () => {
    expect(wrapper.find(DeveloperInfo)).toBePresent();
  });

  it('renders a DeveloperBio component', () => {
    expect(wrapper.find(DeveloperBio)).toBePresent();
  })

  it('renders a DeveloperSkills component', () => {
    expect(wrapper.find(DeveloperSkills)).toBePresent();
  })

  it('renders DeveloperProject components', () => {
    expect(wrapper.find(DeveloperProject)).toBePresent();
  })

  it("renders PortfolioProject components", () => {
    expect(wrapper.find(PortfolioProject)).toBePresent();
  })
})
