class Comment < ActiveRecord::Base
  validates :entry, presence: true
  validates :trip, presence: true

  belongs_to :trip
  delegate :user, to: :trip
end
