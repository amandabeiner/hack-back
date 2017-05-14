class Api::V1::ReviewSerializer < ActiveModel::Serializer
  attributes :id, :professionalism, :timeliness, :tech_skills, :review, :contact

  def contact
    Api::V1::ContactSerializer.new(object.contact, { root: false })
  end
end
