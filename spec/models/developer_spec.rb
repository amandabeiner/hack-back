require "rails_helper"

RSpec.describe Developer, type: :model do

  describe "user" do
    let!(:developer) {FactoryGirl.create(:developer)}

    it "has the required attributes" do

      expect(developer.provider).to_not be_nil
      expect(developer.uid).to_not be_nil
      expect(developer.nickname).to_not be_nil

      expect(developer.name).to_not be_nil
      expect(developer.email).to_not be_nil
      expect(developer.image_url).to_not be_nil

      expect(developer.github_url).to_not be_nil
    end
  end
end
