class CreateNogizakas < ActiveRecord::Migration[5.2]
  def change
    create_table :nogizakas do |t|
        t.string      :name
        t.string      :namekana
        t.text        :eto
        t.text        :star
        t.text        :blood
        t.text        :lin
        t.timestamps null: true
    end
  end
end
