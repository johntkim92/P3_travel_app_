class CommentsController < ApplicationController

  def create
    trip = Trip.find(params[:trip_id])
    @comment = trip.comments.new(comment_params)

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
      .permit(:commenter, :entry)
  end
end
