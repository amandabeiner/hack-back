require "rails_helper"

describe Api::V1::SessionsController do
  let(:developer) { FactoryGirl.create(:developer) }
  let(:contact) { FactoryGirl.create(:contact) }
  let(:organization) { FactoryGirl.create(:organization, contact: contact) }

  describe "#show" do
    let!(:developer_expected_json) {
      {
        "developer" => {
          "id" => developer.id,
          "nickname" => "amandabeiner",
          "name" => "Amanda Beiner",
          "email" => "myemail@me.com",
          "image_url" => "mypicture.com",
          "github_url" => "github.com/amandabeiner",
          "bio" => "I am a developer who likes pugs",
          "current_position" => "EE",
          "years_of_experience" => "1-2",
          "skills" => "doing the things",
          "interests" => "pugs",
          "portfolio_projects" => [],
          "projects" => []
        }
      }
    }

    it "should return a JSON representation of the current user when they are a developer" do
      session[:developer_id] = developer.id
      get :show

      parsed = JSON.parse(response.body)

      expect(response.content_type).to eq("application/json")
      expect(parsed).to eq(developer_expected_json)
    end

    let!(:contact_expected_json) {
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

    it "should return a JSON representation of the current user when they are a contact" do
      session[:contact_id] = contact.id
      get :show

      parsed = JSON.parse(response.body)

      expect(response.content_type).to eq("application/json")
      expect(parsed).to eq(contact_expected_json)
    end
  end
end
