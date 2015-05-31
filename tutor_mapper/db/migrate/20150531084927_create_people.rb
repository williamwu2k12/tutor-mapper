class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :name
      t.float :xcoord
      t.float :ycoord
      t.float :radius

      t.timestamps
    end
  end
end
