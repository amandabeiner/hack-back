require "rails_helper"

describe Api::V1::ContactsController do
  let!(:contact) { FactoryGirl.create(:contact)}
  let!(:organization) { FactoryGirl.create(:organization, contact: contact) }

  describe "#show" do
    let!(:expected_json) {
      {
        "contact"=> {
          "id"=> contact.id,
          "name"=> "Amanda Beiner",
          "email"=> "myemail@me.com",
          "image_url"=> "mypicture.com",
          "organization_id"=>organization.id
        }
      }
    }

    it "should return a json representation of the specified organization" do
      get :show, params: { id: contact.id }

      parsed = JSON.parse(response.body)
      expect(response.content_type).to eq("application/json")
      expect(parsed).to eq(expected_json)
    end
  end
end
