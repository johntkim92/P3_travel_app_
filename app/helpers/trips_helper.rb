module TripsHelper

  def trip_params
    return params.require(:trip)
    .permit(:title, :destination, :description, :start_date, :end_date, :trip_type, :notes, :tag_list, :latitude, :longitude )
  end

end
