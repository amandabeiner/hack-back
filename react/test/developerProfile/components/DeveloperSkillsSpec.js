import DeveloperSkills from 'developerProfile/components/DeveloperSkills';

describe('DeveloperSkills', () => {
  let wrapper = shallow(
    <DeveloperSkills
      skill='javascript, rails, redux'
    />
  );

  it("renders list items with each of the developer's skills", () => {
    expect(wrapper.find('li')).toBePresent();
    expect(wrapper.text()).toMatch('javascript, rails, redux')
  })
})
