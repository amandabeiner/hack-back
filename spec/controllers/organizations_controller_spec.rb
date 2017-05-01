require "rails_helper"

describe Api::V1::OrganizationsController do
  let(:organization) { FactoryGirl.create(:organization, contact: contact) }
  let!(:contact) { FactoryGirl.create(:contact)}

  describe "#show" do
    let!(:expected_json) {
      {
        "organization"=> {
          "id"=> organization.id,
          "name"=> "The best organization",
          "description"=> "the best one. this one. obviously.",
          "mission_statement"=> "crush it",
          "website"=> "www.thebestorg.org",
          "contact"=> {
            "id"=> contact.id,
            "name"=> "Amanda Beiner",
            "email"=> "myemail@me.com",
            "image_url"=> "mypicture.com"
          }
        }
      }
    }

    it "should return a json representation of the specified organization" do
      get :show, id: organization.id

      parsed = JSON.parse(response.body)
      expect(response.content_type).to eq("application/json")
      expect(parsed).to eq(expected_json)
    end
  end
end
