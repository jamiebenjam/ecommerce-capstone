class ProductCategoriesController < ApplicationController

    def index 
        render json: ProductCategory.all
    end

end
