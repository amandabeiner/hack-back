class Api::V1::OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :mission_statement, :website, :created_at, :updated_at, :user

  def user
    object.user
  end
end
