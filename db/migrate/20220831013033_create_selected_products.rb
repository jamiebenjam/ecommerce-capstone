class CreateSelectedProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :selected_products do |t|
      t.belongs_to :cart, null: false, foreign_key: true
      t.belongs_to :order, null: false, foreign_key: true
      t.integer :quantity
      t.belongs_to :product, null: false, foreign_key: true
      t.string :size
      t.string :color
      t.integer :price

      t.timestamps
    end
  end
end
