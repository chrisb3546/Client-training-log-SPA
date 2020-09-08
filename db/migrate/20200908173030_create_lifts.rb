class CreateLifts < ActiveRecord::Migration[6.0]
  def change
    create_table :lifts do |t|
      t.string :name
      t.integer :weight
      t.belongs_to :client, null: false, foreign_key: true

      t.timestamps
    end
  end
end
