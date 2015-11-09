class Trip < ActiveRecord::Base

  TRIPTYPE = [
    'Spring', 'Summer', 'Fall', 'Winter', 'Family', 'Friends', 'Honeymoon', 'Vacation', 'Other'
  ]

  validates :title, presence: true
  validates :destination, presence: true
  validates :description, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true
  # validates :trip_type, inclusion: { in: TRIPTYPE }

  belongs_to :user
  has_many :comments, dependent: :destroy
end
