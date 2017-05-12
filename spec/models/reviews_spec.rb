require "rails_helper"

RSpec.describe Review, type: :model do

  describe "Review" do

    it { should belong_to(:developer) }
    it { should belong_to(:contact) }

    it { should have_valid(:professionalism).when(1, 3, 5) }
    it { should_not have_valid(:professionalism).when(nil, 7) }

    it { should have_valid(:timeliness).when(1, 3, 5) }
    it { should_not have_valid(:timeliness).when(nil, 7) }

    it { should have_valid(:tech_skills).when(1, 3, 5) }
    it { should_not have_valid(:tech_skills).when(nil, 7) }

    it { should have_valid(:review).when("Awesome work and I'm really happy with my new site!") }
  end
end
