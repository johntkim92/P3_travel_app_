class Trip < ActiveRecord::Base

  TRIPTYPE = [
    'Summer', 'Winter', 'Family', 'Honeymoon', 'Other'
  ]

  validates :title, presence: true
  validates :destination, presence: true
  validates :description, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true
  validates :trip_type, inclusion: { in: TRIPTYPE }
  validates :notes, presence: true

  belongs_to :user
  has_many :comments
end
