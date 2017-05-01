require "rails_helper"

RSpec.describe Organization, type: :model do

  describe "Organization" do
    let!(:organization) {FactoryGirl.create(:organization)}

    it { should belong_to(:contact) }
    it { should have_many(:projects) }

    it { should have_valid(:name).when("Great Non-Profit") }
    it { should_not have_valid(:name).when(nil) }

    it { should have_valid(:description).when("This is a description of the Great Non-Profit") }
    it { should_not have_valid(:description).when(nil) }

    it { should have_valid(:mission_statement).when("To do great non-profit things") }
    it { should_not have_valid(:mission_statement).when(nil) }

  end
end
