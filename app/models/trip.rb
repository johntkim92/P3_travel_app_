class Trip < ActiveRecord::Base

  TAGS = [
    'Summer', 'Winter', 'Family', 'Honeymoon', 'Other'
  ]

  belongs_to :user
end
