class ProductsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :update]

    def index 
        render json: Product.all, status: :ok
    end

    def update
        product = Product.find(params[:id])
        product.update(update_params)
        render json: product, status: 202
    end

    def create 
        product = Product.create!(product_params)
        render json: product, status: :created 
    end

    private

    def product_params 
        params.permit(:title, :description, :image)
    end

    def update_params 
        params.permit(:id, :title, :description, :image)
    end
end
