class Api::V1::ProjectOrganizationSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :mission_statement, :website
end
