import DeveloperBio from 'developerProfile/components/DeveloperBio';

describe('DeveloperBio', () => {
  let wrapper = shallow(
    <DeveloperBio
      bio="is a pug"
    />
  );

  it('renders a paragraph tag with the correct bio information', () =>{
    expect(wrapper.find('p')).toBePresent();
    expect(wrapper.text()).toMatch('is a pug');
  })
})
