class Trip < ActiveRecord::Base

  TAGS = [
    'Summer', 'Winter', 'Family', 'Honeymoon', 'Other'
  ]

  validates :title, presence: true
  validates :destination, presence: true
  validates :description, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true
  validates :tags, inclusion: { in: TAGS }
  validates :notes, presence: true

  belongs_to :user
end
