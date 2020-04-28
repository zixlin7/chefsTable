# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demouser = User.create!(firstname: "demo", lastname: "user", email: "demo1@user.com", password: "123456")
demouser1 = User.create!(firstname: "demo2", lastname: "user", email: "demo2@user.com", password: "123456")
demouser2 = User.create!(firstname: "demo3", lastname: "user", email: "demo3@user.com", password: "123456")
