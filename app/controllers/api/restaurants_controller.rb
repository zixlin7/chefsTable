class Api::RestaurantsController < ApplicationController

    def index 
        # debugger
        if !params[:filters] || !params[:filters][:country]
            @restaurants = Restaurant.all
        else
            @restaurants = Restaurant.all.where(country: params[:filters][:country])
        end
        render :index
    end

    def show
        @restaurant = Restaurant.find_by(id: params[:id])
    end
end
