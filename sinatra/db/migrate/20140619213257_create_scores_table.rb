class CreateScoresTable < ActiveRecord::Migration
  def change
    create_table :scores do |t|
      t.string :player_name
      t.integer :score
      t.timestamps
    end
  end
end
