import UserProfile from 'userProfile/components/UserProfile';
import UserInfo from 'userProfile/components/UserInfo';
import PortfolioProject from 'userProfile/components/PortfolioProject';

describe('UserProfile', () => {
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
      ]
    }
  }

  let wrapper = shallow(
    <UserProfile
      user={userData.user}
    />
  );

  it("renders the user's name and profile photo",() => {
    let userImage = wrapper.find('img')

    expect(wrapper.text()).toMatch('Amanda Beiner')
    expect(userImage).toBePresent();
    expect(userImage.prop('src')).toEqual('https://lh6.googleusercontent.com/-Uch-KItz22s/AAAAAAAAAAI/AAAAAAAAAbM/FDaKNpvv504/photo.jpg')
  })


  it("renders a UserInfo component", () => {
    expect(wrapper.find(UserInfo)).toBePresent();
  });

  it("renders PortfolioProject components", () => {
    expect(wrapper.find(PortfolioProject)).toBePresent();
  })
})
