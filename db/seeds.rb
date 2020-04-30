# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'date'

User.destroy_all
<<<<<<< HEAD
=======
Restaurant.destroy_all
Reservation.destroy_all
>>>>>>> reservation

demouser = User.create!(firstname: "demo", lastname: "user", email: "demo1@user.com", password: "123456")
demouser1 = User.create!(firstname: "demo2", lastname: "user", email: "demo2@user.com", password: "123456")
demouser2 = User.create!(firstname: "demo3", lastname: "user", email: "demo3@user.com", password: "123456")

res1 = Restaurant.create!(
    chef_id: 1,
    name: "Alinea",
    cuisine: "American",
    country: "US",
    address: "1723 N Halsted St",
    state: "IL",
    city: "Chicago",
    zip: 60614,
    capacity: 100,
    price_range: 4,
    overview: "Alinea has four times been named the Best Restaurant in America and is one of only 13 restaurants in the U.S. to earn the coveted Michelin 3-Star rating.",
    website_url: "https://www.alinearestaurant.com/",
    open_hour: DateTime.parse("00:00:00"),
    close_hour: DateTime.parse("05:00:00"),
)

res2 = Restaurant.create!(
    chef_id: 2,
    name: "Blue Hill at Stone Barns",
    cuisine: "New American",
    country: "US",
    address: "630 Bedford Rd",
    state: "NY",
    city: "Tarrytown",
    zip: 10591,
    capacity: 200,
    price_range: 4,
    overview: "High-end farm-to-table restaurant serving tasting menus in a refurbished barn on gorgeous grounds.",
    website_url: "https://www.bluehillfarm.com/",
    open_hour: DateTime.parse("23:00:00"),
    close_hour: DateTime.parse("04:00:00"),
)

res3 = Restaurant.create!(
    chef_id: 3,
    name: "Atelier Crenn",
    cuisine: "Modern French",
    country: "US",
    address: "3127 Fillmore St",
    state: "CA",
    city: "San Francisco",
    zip: 94123,
    capacity: 80,
    price_range: 4,
    overview: "Artfully presented French dishes with a focus on innovation, served in a minimalist setting.",
    website_url: "www.ateliercrenn.com",
    open_hour: DateTime.parse("00:00:00"),
    close_hour: DateTime.parse("04:00:00"),
)

res4 = Restaurant.create!(
    chef_id: 3,
    name: "Bar Crenn",
    cuisine: "Wine bar",
    country: "US",
    address: "3131 Fillmore St",
    state: "CA",
    city: "San Francisco",
    zip: 94123,
    capacity: 60,
    price_range: 4,
    overview: "Dominique Crenn’s elegant wine bar serves French small plates in vintage Parisian-style surrounds.",
    website_url: "www.barcrenn.com",
    open_hour: DateTime.parse("23:30:00"),
    close_hour: DateTime.parse("06:00:00"),
)

res5 = Restaurant.create!(
    chef_id: 4,
    name: "The French Laundry",
    cuisine: "Comtemporary",
    country: "US",
    address: "6640 Washington St",
    state: "CA",
    city: "Yountville",
    zip: 94599,
    capacity: 70,
    price_range: 4,
    overview: "Chef Thomas Keller's refined fixed-price meals continually draw food lovers to this stone farmhouse.",
    website_url: "www.thomaskeller.com",
    open_hour: DateTime.parse("00:00:00"),
    close_hour: DateTime.parse("04:00:00"),
)

res6 = Restaurant.create!(
    chef_id: 5,
    name: "n/naka",
    cuisine: "Japanese",
    country: "US",
    address: "3455 Overland Ave",
    state: "CA",
    city: "Los Angeles",
    zip: 90034,
    capacity: 70,
    price_range: 4,
    overview: "Upscale Japanese tasting menus prepared by chef Niki Nakayama & served in a modern setting.",
    website_url: "n-naka.com",
    open_hour: DateTime.parse("00:30:00"),
    close_hour: DateTime.parse("04:00:00"),
)

res7 = Restaurant.create!(
    chef_id: 6,
    name: "McCrady's",
    cuisine: "American",
    country: "US",
    address: "155 E Bay St",
    state: "SC",
    city: "Charleston",
    zip: 29401,
    capacity: 100,
    price_range: 2,
    overview: "Acclaimed spot for high-concept, locally sourced American food in an intimate, brick-walled setting.",
    website_url: "mccradysrestaurant.com",
    open_hour: DateTime.parse("01:00:00"),
    close_hour: DateTime.parse("04:00:00"),
)

res8 = Restaurant.create!(
    chef_id: 7,
    name: "Pujol",
    cuisine: "Mexican",
    country: "Mexico",
    address: "Tennyson 133,",
    state: "Polanco IV Secc",
    city: "Polanco",
    zip: 11570,
    capacity: 80,
    price_range: 4,
    overview: "Pujol is a Mexican restaurant named by Wall Street Journal as the best in Mexico City. ",
    website_url: "pujol.com.mx",
    open_hour: DateTime.parse("20:30:00"),
    close_hour: DateTime.parse("04:00:00"),
)

rsvt1 = Reservation.create!(
    user_id: 1,
    restaurant_id: 1,
    number_of_party: 4,
    time: DateTime.parse("3rd May 2020 00:00:00")
)

rsvt1 = Reservation.create!(
    user_id: 1,
    restaurant_id: 2,
    number_of_party: 2,
    time: DateTime.parse("4th May 2020 00:00:00")
)


