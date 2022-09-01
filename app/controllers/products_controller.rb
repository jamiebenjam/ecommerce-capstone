class ProductsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :update]

    def index 
        render json: Product.all, status: :ok
    end

    def update
        prodcut = Product.find(params[:id])
        prodcut.update(product_params)
        render json: prodcut, status: 202
    end

    def create 
        product = Product.create!(product_params)
        render json: product, status: :created 
    end

    private

    def product_params 
        params.permit(:title, :description, :image)
    end
end
