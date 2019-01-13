class CreatePosttests < ActiveRecord::Migration[5.2]
  def change
    create_table :posttests do |t|
      t.string :name
      t.text :review
      t.timestamps null: true
    end
  end
end
