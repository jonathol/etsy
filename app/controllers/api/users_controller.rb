class Api::UsersController < ApplicationController
  def create
		@user = User.new(user_params)

		if @user.save
			login(@user)
			render "api/users/show"
		else
			render json: @user.errors, status: 422
		end
	end

  def update
    @user = current_user

    if @track.update(user_params)
      render "api/users/show"
    else
      render json: @user.errors, status: 422
    end
  end

	private

	def user_params
		params.require(:user).permit(:username, :password, :firstname, :lastname, :img_url)
	end
end
