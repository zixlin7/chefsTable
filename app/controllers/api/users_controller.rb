class Api::UsersController < ApplicationController

    def index
        @users = User.all
    end

    def create
        @user = User.create(user_params)
        if @user.save
            log_in(@user)
            render :show
        else 
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    private
    def user_params
        params.require(:user).permit(:firstname, :lastname, :email, :password)
    end
end
