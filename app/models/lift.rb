class Lift < ApplicationRecord
  belongs_to :client
  validates :name, presence: true
  validates :weight, presence: true
  validates :repetitions, presence: true
  validates :rom, presence: true
  validates :date, presence: true
end
