class TripsController < ApplicationController

  before_action :require_current_user

  def new
    @trip = Trip.new
  end

  def create
    @trip = current_user.trips.new(trip_params)

    if @trip.save
      # redirect_to trips_path
    else
      # flash[:message] = @trip.errors.full_messages.to_sentence
      # render :new
      render json: {
        error: {
          message:
          @trip.errors.full_messages.to_sentence
        }
      }
    end

  end

  def edit
  end

  def update
  end

  def show
  end

  def index
    @trips = current_user.trips.includes(:comments)
  end

  def delete
  end

  private

  def trip_params
    return params.require(:trip)
    .permit(:title, :destination, :description, :start_date, :end_date, :trip_type, :notes)
  end


end
