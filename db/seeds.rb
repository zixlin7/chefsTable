# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'date'
require 'open-uri'

User.destroy_all
Restaurant.destroy_all
Reservation.destroy_all


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
    overview: "Alinea has four times been named the Best Restaurant in America and is one of only 13 restaurants in the U.S. to earn the coveted Michelin 3-Star rating.Featuring a single, seasonally driven tasting menu of between 18 and 22 courses, the experience of dining at Alinea is not only delicious, but also fun, emotional, and provocative.",
    website_url: "https://www.alinearestaurant.com/",
    open_hour: DateTime.parse("00:00:00"),
    close_hour: DateTime.parse("05:00:00"),
)

pic1 = open('https://chefs-table-seeds.s3-us-west-1.amazonaws.com/alinea.jpg')
res1.profilepic.attach(io:pic1, filename:'alinea.jpg')

res2 = Restaurant.create!(
    chef_id: 2,
    name: "Blue Hill at Stone Barns",
    cuisine: "New American",
    country: "US",
    address: "630 Bedford Rd",
    state: "NY",
    city: "New York",
    zip: 10591,
    capacity: 200,
    price_range: 4,
    overview: "High-end farm-to-table restaurant serving tasting menus in a refurbished barn on gorgeous grounds. Dan Barber’s restaurant in Pocantico Hills, New York serves tasting menus that highlight ingredients that have been plucked from the soil directly outside the dining room, as well as other local farms",
    website_url: "https://www.bluehillfarm.com/",
    open_hour: DateTime.parse("23:00:00"),
    close_hour: DateTime.parse("04:00:00"),
)
pic2 = open("https://chefs-table-seeds.s3-us-west-1.amazonaws.com/bluehill.jpeg")
res2.profilepic.attach(io:pic2, filename:'bluehill.jpg')
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
pic3 = open('https://chefs-table-seeds.s3-us-west-1.amazonaws.com/atelier.jpg')
res3.profilepic.attach(io:pic3, filename:'ac.jpg')
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
pic4 = open('https://chefs-table-seeds.s3-us-west-1.amazonaws.com/barcrenn.jpg')
res4.profilepic.attach(io:pic4, filename:'ba.jpg')
res5 = Restaurant.create!(
    chef_id: 4,
    name: "The French Laundry",
    cuisine: "Contemporary",
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
pic5 = open('https://chefs-table-seeds.s3-us-west-1.amazonaws.com/thefl.jpg')
res5.profilepic.attach(io:pic5, filename:'tfl.jpg')
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
pic6 = open('https://chefs-table-seeds.s3-us-west-1.amazonaws.com/nnaka.jpg')
res6.profilepic.attach(io:pic6, filename:'nn.jpg')

res7 = Restaurant.create!(
    chef_id: 6,
    name: "McCrady's",
    cuisine: "New American",
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
pic7 = open('https://chefs-table-seeds.s3-us-west-1.amazonaws.com/mccrady.jpg')
res7.profilepic.attach(io:pic7, filename:'mc.jpg')

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

pic8 = open('https://chefs-table-seeds.s3-us-west-1.amazonaws.com/Pujol.jpg')
res8.profilepic.attach(io:pic8, filename:'pj.jpg')

res9 = Restaurant.create!(
    chef_id: 9,
    name: "Milk Bar East Village",
    cuisine: "Bakery",
    country: "US",
    address: "251 E 13th St",
    state: "NY",
    city: "New York",
    zip: 10003,
    capacity: 30,
    price_range: 1,
    overview: "The tiny East Village outpost of this burgeoning chain sits directly across the street from the bakery’s original home in a corner of the Momofuku Ssäm Bar space. If you’re new to the Milk Bar phenomenon, try the crack pie, corn cookie, or cereal milk soft serve.",
    website_url: "milkbarstore.com",
    open_hour: DateTime.parse("21:00:00"),
    close_hour: DateTime.parse("07:00:00"),
)
pic9 = open('https://chefs-table-seeds.s3-us-west-1.amazonaws.com/milkbar2.jpg')
res9.profilepic.attach(io:pic9, filename:'mb.jpg')

res10 = Restaurant.create!(
    chef_id: 8,
    name: "Osteria Mozza",
    cuisine: "Wine bar",
    country: "US",
    address: "6602 Melrose Ave",
    state: "CA",
    city: "Los Angeles",
    zip: 90038,
    capacity: 80,
    price_range: 3,
    overview: "Lauded upscale Italian cuisine from chef Nancy Silverton in a bustling atmosphere.",
    website_url: "la.osteriamozza.com",
    open_hour: DateTime.parse("23:30:00"),
    close_hour: DateTime.parse("06:00:00"),
)

pic10 = open('https://chefs-table-seeds.s3-us-west-1.amazonaws.com/Osteria-Mozza.jpg')
res10.profilepic.attach(io:pic10, filename:'om.jpg')

res11 = Restaurant.create!(
    chef_id: 10,
    name: "Ivan Ramen",
    cuisine: "Japanese",
    country: "US",
    address: "25 Clinton St",
    state: "NY",
    city: "New York",
    zip: 10002,
    capacity: 30,
    price_range: 1,
    overview: "In addition to several varieties of ramen, Ivan Orkin’s Lower East Side restaurant also serves dishes that fuse Japanese and American flavors together, like a beef tongue katsu sandwich with au jus, and a mushroom chili-topped 'tofu Coney Island.' Orkin also operates a ramen bar and pizzeria in Manhattan’s Gotham West Market, as well as two noodle shops in Japan.",
    website_url: "milkbarstore.com",
    open_hour: DateTime.parse("18:00:00"),
    close_hour: DateTime.parse("07:00:00"),
)
pic11 = open('https://chefs-table-seeds.s3-us-west-1.amazonaws.com/ivanramen.jpg')
res11.profilepic.attach(io:pic11, filename:'ir.jpg')

res12 = Restaurant.create!(
    chef_id: 3,
    name: "Petit Crenn",
    cuisine: "Modern French",
    country: "US",
    address: "609 Hayes St",
    state: "CA",
    city: "San Francisco",
    zip: 94102,
    capacity: 80,
    price_range: 4,
    overview: "Tucked into the edge of Hayes Valley, Petit Crenn is just one link in the living connection between Chef Dominique and her childhood memories in Brittany. Inspired by Northern California's dramatic coast, the seafood-forward tasting menu is prepared in an open kitchen anchored by a wood-fired grill.",
    website_url: "www.www.petitcrenn.com",
    open_hour: DateTime.parse("00:00:00"),
    close_hour: DateTime.parse("04:00:00"),
)
pic12 = open('https://chefs-table-seeds.s3-us-west-1.amazonaws.com/petitcrenn.jpg')
res12.profilepic.attach(io:pic12, filename:'pc.jpg')

res13 = Restaurant.create!(
    chef_id: 1,
    name: "The Aviary",
    cuisine: "Wine bar",
    country: "US",
    address: "955 W Fulton Market,",
    state: "IL",
    city: "Chicago",
    zip: 60614,
    capacity: 100,
    price_range: 4,
    overview: "Where cocktails and service are given the same attention to detail as a four-star restaurant; where bartenders are trained as chefs; where the produce and herbs are carefully sourced and procured fresh daily; where the name and branding of the spirit mixed is less important than its actual flavor; where drinks are made quickly and consistently in a state-of-the-art drink kitchen; where innovation and tradition are both honored",
    website_url: "https://www.theaviary.com",
    open_hour: DateTime.parse("17:00:00"),
    close_hour: DateTime.parse("07:00:00"),
)
pic13 = open('https://chefs-table-seeds.s3-us-west-1.amazonaws.com/theaviary.jpeg')
res13.profilepic.attach(io:pic13, filename:'ta.jpg')

res14 = Restaurant.create!(
    chef_id: 4,
    name: "Ad Hoc",
    cuisine: "American",
    country: "US",
    address: "6476 Washington St",
    state: "CA",
    city: "San Francisco",
    zip: 94599,
    capacity: 70,
    price_range: 4,
    overview: "In September 2006, Chef Thomas Keller opened the doors to Ad Hoc, his casual dining venue for showcasing the American comfort food of his childhood. ",
    website_url: "www.thomaskeller.com",
    open_hour: DateTime.parse("18:00:00"),
    close_hour: DateTime.parse("22:00:00"),
)
pic14 = open('https://chefs-table-seeds.s3-us-west-1.amazonaws.com/adhoc.jpg')
res14.profilepic.attach(io:pic14, filename:'ah.jpg')

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

20.times do (
    User.create(
    firstname: Faker::Name.first_name,
    lastname: Faker::Name.last_name,
    email: Faker::Internet.free_email,
    password: Faker::Internet.password(min_length: 6)
    )
)
end

100.times do
    Review.create(
        user_id: Faker::Number.between(from: 1, to: 22),
        restaurant_id: Faker::Number.between(from: 1, to: 14),
        rating: Faker::Number.between(from: 4, to: 5),
        body: Faker::Restaurant.unique.review,
        title: "just great!"
    )
end


