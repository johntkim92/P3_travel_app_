class UsersController < ApplicationController

  # create method for user

  def create
    @user = User.new(user_params)

    if @user.save
      # flash[:message] = "registered, please log in"
      redirect_to application_mapp_path
    else
      flash[:message] = @user.errors.full_messages.to_sentence
      redirect_to root_path
    end

  end


  # private methods
  private

  def user_params
    return params.require(:user).permit(:email, :password, :username, :full_name)
  end
end
