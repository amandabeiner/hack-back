# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170501145229) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "contacts", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "email",      null: false
    t.string   "image_url",  null: false
    t.string   "uid",        null: false
    t.string   "provider",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "developers", force: :cascade do |t|
    t.string   "uid"
    t.string   "provider"
    t.string   "token"
    t.string   "nickname"
    t.string   "name"
    t.string   "email"
    t.string   "image_url"
    t.string   "github_url"
    t.string   "role"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "bio"
    t.string   "current_position"
    t.string   "years_of_experience"
    t.text     "skills"
    t.text     "interests"
  end

  create_table "organizations", force: :cascade do |t|
    t.string   "name",              null: false
    t.text     "description",       null: false
    t.text     "mission_statement", null: false
    t.string   "website"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.integer  "contact_id"
    t.index ["contact_id"], name: "index_organizations_on_contact_id", using: :btree
  end

  create_table "portfolio_project_users", force: :cascade do |t|
    t.integer "portfolio_project_id", null: false
    t.integer "developer_id"
    t.index ["developer_id"], name: "index_portfolio_project_users_on_developer_id", using: :btree
    t.index ["portfolio_project_id"], name: "index_portfolio_project_users_on_portfolio_project_id", using: :btree
  end

  create_table "portfolio_projects", force: :cascade do |t|
    t.string "name",        null: false
    t.text   "description"
    t.string "source_url"
    t.string "github_url"
  end

  create_table "projects", force: :cascade do |t|
    t.string   "name",                            null: false
    t.string   "description",                     null: false
    t.string   "stack"
    t.boolean  "claimed",         default: false
    t.integer  "organization_id"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.index ["organization_id"], name: "index_projects_on_organization_id", using: :btree
  end

end
