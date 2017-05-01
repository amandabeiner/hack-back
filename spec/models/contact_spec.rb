require "rails_helper"

RSpec.describe Contact, type: :model do

  describe "Contact" do
    let!(:contact) {FactoryGirl.create(:contact)}

    it "has the required attributes" do
      expect(contact.name).to_not be_nil
      expect(contact.email).to_not be_nil
      expect(contact.uid)
      expect(contact.image_url).to_not be_nil
      expect(contact.provider).to_not be_nil
    end
  end
end
