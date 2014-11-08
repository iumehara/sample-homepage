class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.string :url
      t.string :github
      t.string :photo
      t.string :icon
      t.datetime :start_date
      t.datetime :end_date
      t.timestamps
    end
  end
end
