class AddDeveloperDetails < ActiveRecord::Migration[5.0]
  def change
    change_table(:users) do |t|
      t.text :bio
      t.string :current_position
      t.string :years_of_experience
      t.text :skills
      t.text :interests
    end
  end
end
