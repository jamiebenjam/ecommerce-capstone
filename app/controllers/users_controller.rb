class UsersController < ApplicationController
    skip_before_action :authorize, only: :create 

    def show 
        render json: @current_user
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update
        user = User.find(params[:id])
        user.update(update_params)
        render json: user, status: 202
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :first_name, :last_name, :email, :address)
    end

    def update_params
        params.permit(:first_name, :last_name, :address)
    end
end
