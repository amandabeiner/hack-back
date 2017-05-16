import NavBar from 'layout/components/NavBar'
import { Link } from 'react-router'

describe('NavBar with developer', () => {
  let developer =
  {
    developer: {
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
  }
  let wrapper = shallow(
    <NavBar
      currentUser={developer}
    />
  )

  it('should render links for each section of the webpage', () => {
    expect(wrapper.find(Link).length).toEqual(3)
    expect(wrapper.find('a').first().props().href).toEqual('/logout')
    expect(wrapper.find(Link).first().props().to).toEqual('/projects')
    expect(wrapper.find(Link).nodes[1].props.to).toEqual('/dashboard')
  })

  it('should render a link to that developers profile under the text My Profile', () => {
    expect(wrapper.find(Link).nodes[2].props.to).toEqual('/developers/1/profile')
    expect(wrapper.find(Link).nodes[2].props.children).toEqual('My Profile')
  })
})

describe('NavBar with contact', () => {
  let contact =
    {
      contact: {
        id: 2,
        name: 'Michael Thomson',
        email: 'michaelgt04@gmail.com',
        image_url: 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg',
        organization_id: 1
      }
    }

  let wrapper = shallow(
    <NavBar
      currentUser={contact}
    />
  )

  it('should render links for each section of the webpage', () => {
    expect(wrapper.find(Link).length).toEqual(3)
    expect(wrapper.find('a').first().props().href).toEqual('/logout')
    expect(wrapper.find(Link).first().props().to).toEqual('/projects')
    expect(wrapper.find(Link).nodes[1].props.to).toEqual('/dashboard')
  })

  it('should render a link to the organizations profile', () => {
    expect(wrapper.find(Link).nodes[2].props.to).toEqual('/organizations/1/profile')
    expect(wrapper.find(Link).nodes[2].props.children).toEqual('My Profile')
  })
})
