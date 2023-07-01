const router = require('express').Router()
const places = require('../models/places.js')


    // Route to index page
    router.get('/', (req,res) => {
        res.render('places/index', {places})
    })



    //  FORM PLACE TO ADD PLACE
    router.get('/new', (req,res) => {
        res.render('places/new')
    })

    //  POST 
    router.post('/', (req,res) => {
          
        if(!req.body.pic) {
            //Default image if one is not provided
            req.body.pic = 'https://placekitten.com/400/400'
        }

        if(!req.body.city) {
            //Default city if one is not provided
            req.body.city = 'Earth'
        }

        if(!req.body.state) {
            //Default state if one is not provided
            req.body.state = 'Milky Way'
        }

        places.push(req.body)   ///adds the new default code to the places array or the elment in the places array ,not sure

        //  console.log(req.body)  //can check if your info is being recieved in  the backend via POST method from the form

        // res.render('places/index', {places})  this works but you need to pass in the places array unless it will give map error
        
        res.redirect('/places')   //redirects to the index page GET route
    })


    // place Page
    router.get('/places/:id', (req,res) => {
        res.render('show')
    })









module.exports = router