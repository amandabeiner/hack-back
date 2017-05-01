require "rails_helper"

RSpec.describe Project, type: :model do

  describe "Project" do

    it { should belong_to(:organization) }

    it { should have_valid(:name).when("Awesome Project") }
    it { should_not have_valid(:name).when(nil) }

    it { should have_valid(:description).when("It is an awesome project by Amanda, Mike, and Scarjie") }
    it { should_not have_valid(:description).when(nil) }
  end
end
