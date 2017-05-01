import DeveloperInfo from 'developerProfile/components/DeveloperInfo';

describe('DeveloperInfo', () => {
  let developerData =   {
    developer: {
      id: 2,
      nickname: null,
      name: "Amanda Beiner",
      email: "aebeiner@gmail.com",
      image_url: "https://lh6.googleusercontent.com/-Uch-KItz22s/AAAAAAAAAAI/AAAAAAAAAbM/FDaKNpvv504/photo.jpg",
      github_url: "http://github.com/amandabeiner",
      role: "developer",
      created_at: "2017-04-24T20:34:11.075Z",
      updated_at: "2017-04-24T20:34:11.083Z",
      bio: "is a dog",
      current_position: "dog",
      years_of_experience: "1-2",
      skills: "sniffing things",
      interests: "having fun"
    }
  }

  let wrapper = shallow(

    <DeveloperInfo
      developer={developerData.developer}
    />
  );

  it("renders the developer's basic info",() => {
    expect(wrapper.text()).toMatch('Current Position: dog');
    expect(wrapper.text()).toMatch('Bio: is a dog');
    expect(wrapper.text()).toMatch('Years of Experience: 1-2');
    expect(wrapper.text()).toMatch('Languages and skills: sniffing things');
    expect(wrapper.text()).toMatch('Interests: having fun');

  })
})
