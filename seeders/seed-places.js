const db = require('../models')

db.Place.create([{
        name: 'Chicas Taco',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Mexican, Central-America',
        pic: '/images/rest1.jpg',
        founded:1989
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/rest2.jpg',
        founded:2020
        
      }])
      .then(() => {
        console.log("Success!")
        process.exit()
      })
      .catch(err => {
        console.log("Failure!",err)
        process.exit()
      })