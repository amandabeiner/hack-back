class Api::V1::ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :stack, :claimed, :created_at, :updated_at, :organization, :contact, :completed


  def organization
    Api::V1::ProjectOrganizationSerializer.new(object.organization, { root: false })
  end

  def contact
    Api::V1::ContactSerializer.new(object.organization.contact, { root: false })
  end
end
