class OrdersController < ApplicationController
    skip_before_action :authorize, only: [:index, :create]
    
    def index
        render json: Order.all, status: :ok
    end

    def create
        order = Order.create!(order_params)
        render json: order, status: :created
    end

    private

    def order_params
        params.permit(:name, :address, :user_id, :amount, :email)
    end
end
