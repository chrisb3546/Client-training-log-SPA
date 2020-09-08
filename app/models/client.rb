class Client < ApplicationRecord
    has_many :lifts, dependent: :destroy
end
