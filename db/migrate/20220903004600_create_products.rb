class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :title
      t.text :description
      t.string :image
      t.decimal :price
      t.string :color
      t.boolean :isActive

      t.timestamps
    end
  end
end
