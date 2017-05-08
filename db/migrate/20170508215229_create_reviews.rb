class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :professionalism, null: false
      t.integer :tech_skills, null: false
      t.integer :timeliness, null: false
      t.text :review

      t.belongs_to :developer
      t.timestamps
    end
  end
end
