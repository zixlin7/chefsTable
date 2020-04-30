class Api::RestaurantsController < ApplicationController

    def index 
        # debugger
        @restaurants = Restaurant.all.where(country: params[:filters][:country])
        @restaurants = Restaurant.search(params[:filters]).length > 0 ? Restaurant.search(params[:filters]) : Restaurant.all
        # debugger

        render :index
    end

    def show
        @restaurant = Restaurant.find_by(id: params[:id])
    end
end
