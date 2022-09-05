class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.decimal :amount
      t.string :status
      t.string :name
      t.string :email
      t.string :address

      t.timestamps
    end
  end
end
