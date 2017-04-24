import ContactPerson from 'sharedResources/components/ContactPerson';

describe('ContactPerson', () => {
  let wrapper = shallow(
    <ContactPerson
      name={"Marjie Lam"}
      email={"crushcode@intrepid.jenn"}
      imageUrl={"www.mouthbag.com"}
    />
  );

  it("should render the basic info for the contact person", () => {
    let userImage = wrapper.find('img')

    expect(wrapper.text()).toMatch("Marjie Lam");
    expect(wrapper.text()).toMatch("crushcode@intrepid.jenn");
    expect(wrapper.find('img')).toBePresent()
    expect(userImage.prop('src')).toEqual('www.mouthbag.com')
  });
})
