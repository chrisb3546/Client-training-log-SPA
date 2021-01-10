class CreateLifts < ActiveRecord::Migration[6.0]
  def change
    create_table :lifts do |t|
      t.text :description
      t.belongs_to :client, null: false, foreign_key: true
    end
  end
end
