class Api::RestaurantsController < ApplicationController

    def index 
        
        if !params[:filters] || !params[:filters][:country]
            @restaurants = Restaurant.all
        else
            @restaurants = Restaurant.all.where(country: params[:filters][:country])
        end

       
        if params[:filters] && params[:filters][:moreFilter]
            price_filter = params[:filters][:moreFilter].select{|filter| filter.length == 1}
            cuisine_filter = params[:filters][:moreFilter] - price_filter
            if !price_filter.empty? && !cuisine_filter.empty?
                @restaurants = @restaurants.select{|res| price_filter.include?(res.price_range.to_s) && cuisine_filter.include?(res.cuisine)}

            elsif !price_filter.empty?
                @restaurants = @restaurants.select{|res| price_filter.include?(res.price_range.to_s)}
            else 
                @restaurants = @restaurants.select{|res| cuisine_filter.include?(res.cuisine)}
            end
        end
        render :index
    end

    def show
        @restaurant = Restaurant.find_by(id: params[:id])
    end
end
