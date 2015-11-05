class SessionController < ApplicationController

  def create
    user = User.find_by(username:
    user_params[:username])

    if user && user.authenticate(user_params[:password])
      session[:current_user_id] = user.id
      flash[:message] = "thanks, logged in"
    else
      flash[:message] = "username / password combo error"
    end

    redirect_to root_path
  end

  def destroy
    session[:current_user_id] = nil
    redirect_to root_path
  end

  private

  def user_params
    # do we need other ones here if we just use the two below to log in???
    return params.require(:user).permit(:username, :password)
  end

end
