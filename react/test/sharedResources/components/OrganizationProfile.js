import OrganizationProfile from 'sharedResources/components/OrganizationProfile';

describe('OrganizationProfile', () => {
  let wrapper = shallow(
    <OrganizationProfile
      name={"Scott Ehrmann's Non-Profit"}
      description={"We like to help people learn to drive"}
      missionStatement={"whereby, thanks for listening to me"}
      website={'www.uberlyft5stars.com'}
    />
  );

  it("should render the basic info for the contact person", () => {
    let orgSite = wrapper.find('a')

    expect(wrapper.text()).toMatch("Scott Ehrmann's Non-Profit");
    expect(wrapper.text()).toMatch("We like to help people learn to drive");
    expect(wrapper.text()).toMatch("whereby, thanks for listening to me");
    expect(wrapper.find('a')).toBePresent()
    expect(orgSite.prop('href')).toEqual('www.uberlyft5stars.com')
  });
})
