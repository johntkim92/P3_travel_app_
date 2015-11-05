class UsersController < ApplicationController
<<<<<<< HEAD
=======


  # create method for user

  def create
    @user = User.new(user_params)

    if @user.save
      flash[:message] = "registered, please log in"
    else
      flash[:message] = @user.errors.full_messages.to_sentence
    end

    redirect_to root_path
  end


  # private methods
  private

  def user_params
    return params.require(:user).permit(:email, :password, :username, :full_name)
  end

>>>>>>> e31925709e02bc45a73575c9393aa4e42e12ec01
end
