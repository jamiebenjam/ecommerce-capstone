class ProductsController < ApplicationController
    skip_before_action :authorize, only: [:index, :create, :show, :update]

    def index
        render json: Product.all, status: :ok
    end

    def show
        product = Product.find(params[:id])
        render json: product, status: :ok
    end

    def create
        product = Product.create!(product_params)
        render json: product, status: :created
    end

    def update
        product = Product.find(params[:id])
        product.update(product_params)
        render json: product, status: 202
    end

    private

    def product_params
        params.permit(:title, :description, :image, :price, :color, :isActive)
    end
end
