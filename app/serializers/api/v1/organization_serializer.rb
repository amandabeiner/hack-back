class Api::V1::OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :mission_statement, :website, :contact

  def contact
    Api::V1::ContactSerializer.new(object.user, { root: false })
  end
end
