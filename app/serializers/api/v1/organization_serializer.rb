class Api::V1::OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :mission_statement, :website, :contact, :projects

  def contact
    Api::V1::ContactSerializer.new(object.contact, { root: false })
  end

  def projects
    object.projects
  end
end
