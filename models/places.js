const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: {type:String, required:true},
  pic: {type:String, default:'http://placekitten.com/500/500'},
  cuisines: {type:String, required:true},
  city: {type:String, default:'Earth'},
  state: {type:String, default:'Milky Way'},
  founded: {
    type:Number,
    min: [1673, 'Surely not that old?!'],
    max: [new Date().getFullYear(), 'Hey, this year is in the future!']
    }
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}

module.exports = mongoose.model('Place', placeSchema)







// module.exports = [{
//     name: 'Chicas Taco',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Mexican, Central-America',
//     pic: '/images/rest1.jpg',
//     attN:"Shea Rouda",
//     att1: "https://unsplash.com/@shrouda?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
//     att2:"https://unsplash.com/s/photos/chicos-tacos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    
//   }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: '/images/rest2.jpg',
//     attN:'Nathan Dumlao',
//     att1: "https://unsplash.com/@nate_dumlao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
//     att2:"https://unsplash.com/images/food/coffee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
//   }]