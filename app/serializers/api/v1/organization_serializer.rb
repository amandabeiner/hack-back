class Api::V1::OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :mission_statement, :website, :user

  def user
    Api::V1::UserSerializer.new(object.user, { root: false })
  end
end
