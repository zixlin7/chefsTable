class Api::ReviewsController < ApplicationController
    
    def create
        @review = Review.new(review_params)

        if @review.save
            render :show
        else
            render json: @review, status: 422
        end
    end

    def update
        @review = Review.find_by(id: params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: @review, status: 422
        end
    end

    def show
        @review = Review.find_by(id: params[:id])
        render :show
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        id = @review.id
        @review.destroy
        render json: id
    end


    private
    def review_params
        params.require(:review).permit(:rating, :body, :restaurant_id, :title, :user_id)
    end



end
