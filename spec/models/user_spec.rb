require "rails_helper"

RSpec.describe User, type: :model do

  describe "user" do
    let!(:user) {FactoryGirl.create(:user)}

    it "has the required attributes" do

      expect(user.provider).to_not be_nil
      expect(user.uid).to_not be_nil
      expect(user.nickname).to_not be_nil

      expect(user.name).to_not be_nil
      expect(user.email).to_not be_nil
      expect(user.image_url).to_not be_nil

      expect(user.github_url).to_not be_nil
      expect(user.role).to_not be_nil
    end
  end
end
