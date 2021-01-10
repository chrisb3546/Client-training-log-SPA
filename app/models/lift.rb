class Lift < ApplicationRecord
  belongs_to :client
  validates :description, presence: true

end
