class Api::V1::ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :stack, :claimed, :created_at, :updated_at, :organization, :contact


  def organization
    Api::V1::ProjectOrganizationSerializer.new(object.organization, { root: false })
  end

  def contact
    Api::V1::ContactSerializer.new(object.organization.user, { root: false })
  end
end