class AddDateToLifts < ActiveRecord::Migration[6.0]
  def change
    add_column :lifts, :date, :string
  end
end
