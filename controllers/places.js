const router = require('express').Router()

    router.get('/', (req,res) => {
        let places = [{
            name: 'Chicas Taco',
            city: 'Seattle',
            state: 'WA',
            cuisines: 'Mexican, Central-America',
            pic: '/images/rest1.jpg',
            attN:"Shea Rouda",
            att1: "https://unsplash.com/@shrouda?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
            att2:"https://unsplash.com/s/photos/chicos-tacos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            
          }, {
            name: 'Coding Cat Cafe',
            city: 'Phoenix',
            state: 'AZ',
            cuisines: 'Coffee, Bakery',
            pic: '/images/rest2.jpg',
            attN:'Nathan Dumlao',
            att1: "https://unsplash.com/@nate_dumlao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
            att2:"https://unsplash.com/images/food/coffee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          }]
          
        res.render('places/index', {places})
    })



    // NEW PLACE FORM
    router.get('/new', (req,res) => {
        res.render('places/new')
    })

    router.post('/places', (req,res) => {
        res.render('places/index')
    })


    // place Page
    router.get('/places/:id', (req,res) => {
        res.render('show')
    })









module.exports = router