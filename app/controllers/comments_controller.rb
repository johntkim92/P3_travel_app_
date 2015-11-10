class CommentsController < ApplicationController

  def create
    trip = Trip.find(params[:trip_id])
    @comment = trip.comments.new({
      entry: comment_params[:entry],
      commenter: current_user.username
    })

    if @comment.save

    else
      render json: {
        error: {
          message:
          @comment.errors.full_messages.to_sentence
        }
      }
    end
  end

  private

  def comment_params
    return params.require(:comment)
      .permit(:entry)
  end
end
