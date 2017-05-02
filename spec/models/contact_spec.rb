require "rails_helper"

RSpec.describe Contact, type: :model do

  mock_auth = {
    "provider"=>"facebook",
    "uid"=>"123456",
    "info"=> {
      "name"=>"Amanda Beiner",
      "email"=>"myemail@me.com",
      "image"=>"mypic.com",
    }
  }

  describe "Contact" do

    it { should have_valid(:name).when("Amanda Beiner", "Mike Thomson") }
    it { should_not have_valid(:name).when(nil) }

    it { should have_valid(:email).when("marjie@killingit.com") }
    it { should_not have_valid(:email).when(nil) }

    it { should have_valid(:image_url).when("mypicture.com") }
    it { should_not have_valid(:image_url).when(nil) }

    it { should have_valid(:uid).when("123456") }
    it { should_not have_valid(:uid).when(nil) }

    it { should have_valid(:provider).when("facebook", "linkedin", "google_oauth2") }
    it { should_not have_valid(:provider).when(nil) }

    it { should have_many(:organizations) }
  end

  describe "#find_or_create_contact" do
    it "changes the number of contacts in the database by 1" do
      expect { Contact.find_or_create_contact(mock_auth) }.to change{ Contact.count }.by(1)
    end

    it "creates a contact object with the correct attributes" do
      new_contact = Contact.find_or_create_contact(mock_auth)
      expect(new_contact.provider).to eq("facebook")
      expect(new_contact.name).to eq("Amanda Beiner")
      expect(new_contact.email).to eq("myemail@me.com")
      expect(new_contact.image_url).to eq("mypic.com")
    end
  end

  describe "#organization_auth?" do
    it "should return true if a contact's provider is facebook" do
      expect(Contact.organization_auth?(mock_auth)).to eq(true)
    end
  end
end
