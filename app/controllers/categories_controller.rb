class CategoriesController < ApplicationController
    skip_before_action :authorize, only: [:create, :index] 

    def index
        render json: Category.all, status: :ok
    end
    def create
        category = Category.create!(category_params)
        render json: category, status: :created
    end

    private

    def category_params
        params.permit(:name)
    end
end
