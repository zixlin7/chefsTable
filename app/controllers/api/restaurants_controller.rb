class Api::RestaurantsController < ApplicationController

    def index 
        if !params[:filters] || !params[:filters][:city] || params[:filters][:city] == ""
            @restaurants = Restaurant.all
        else
            @restaurants = Restaurant.all.where(city: params[:filters][:city])
        end
        render :index
    end

    def show
        @restaurant = Restaurant.find_by(id: params[:id])
    end
end
