import PortfolioProject from 'developerProfile/components/PortfolioProject';

describe('PortfolioProject', () => {
  let projectInfo = {
    id: 1,
    name: "Ok Kyle",
    description: "there's a kyle for that",
    source_url: "ok-kyle.herokuapp.com",
    github_url: "github.com/michaelgt04/ok-kyle"
  }

  let wrapper = shallow(
    <PortfolioProject
      portfolioProject = { projectInfo }
    />
  )

  it ('renders the information about a portfolio project', () =>{

    expect(wrapper.text()).toMatch("Ok Kyle");
    expect(wrapper.text()).toMatch("there's a kyle for that");
    expect(wrapper.text()).toMatch("ok-kyle.herokuapp.com");
    expect(wrapper.text()).toMatch("github.com/michaelgt04/ok-kyle");
  })
})
