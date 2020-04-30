class Api::ReservationsController < ApplicationController

    def index
        @reservations = Reservation.all
        render :index
    end

    def create
        @reservation = Reservation.new(reservation_params)
        if @reservation.save
            render :show
        else 
            render json: @reservation.errors.full_messages, status: 400
        end
    end

    def update
        @reservation = Reservation.find_by(id: params[:id])
        if @reservation.update
            render :show
        else 
            render json: @reservation.errors.full_messages, status: 400
        end
    end

    def show
        @reservation = Reservation.find_by(id: params[:id])
        render :show
    end

    def destroy
        @reservation = Reservation.find_by(id: params[:id])
        id = @reservation.id
        @reservation.destroy
        render json: id
    end


    private
    def reservation_params
        params.require(:reservation).permit(:user_id, :restaurant_id, :number_of_party, :time)
    end
end
