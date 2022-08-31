class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :amount
      t.string :address
      t.string :status
      t.text :invoice
      t.string :email
      t.string :name

      t.timestamps
    end
  end
end
