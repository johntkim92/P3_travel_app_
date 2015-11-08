json.trip do
  json.id @trip.id
  json.title @trip.title
  json.destination @trip.destination
  json.description @trip.description
  json.start_date @trip.start_date
  json.end_date @trip.end_date
  json.trip_type @trip.trip_type
  json.notes @trip.notes
  json.comments []
end
