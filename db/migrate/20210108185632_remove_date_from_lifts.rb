class RemoveDateFromLifts < ActiveRecord::Migration[6.0]
  def change
    remove_column :lifts, :date, :datetime
  end
end
