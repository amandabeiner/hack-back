class Api::V1::ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :stack, :claimed, :created_at, :updated_at, :organization, :contact


  def organization
    object.organization
  end

  def contact
    object.organization.user
  end
end
