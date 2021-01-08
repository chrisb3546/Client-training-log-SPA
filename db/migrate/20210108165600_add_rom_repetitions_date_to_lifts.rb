class AddRomRepetitionsDateToLifts < ActiveRecord::Migration[6.0]
  def change
    add_column :lifts, :rom, :string
    add_column :lifts, :repetitions, :integer
    add_column :lifts, :date, :datetime
  end
end
