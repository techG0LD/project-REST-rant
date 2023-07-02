const router = require('express').Router()
const places = require('../models/places.js')


    // Route to index page
    router.get('/', (req,res) => {
        res.render('places/index', {places})
    })

    // ROUTE TO EDIT PAGE
    router.get('/:id/edit', (req,res) => {
        res.render('edit')
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


    // Route Show Place Page
    router.get('/:id', (req,res) => {
        let id = Number(req.params.id)
        if(isNaN(id)){     //checks if id is a number 
            res.render('error404')
        }
        else if (!places[id]) {       //second check is to see if that id has a corressponding index in the places array .. if not then go into this else if condition
            res.render('error404')
        }
        else {            //once passing both checks. show page of place
            res.render('places/show', {places:places[id],id})
        }
    })

    router.delete('/:id', (req,res) => {
        let id= Number(req.params.id)
        if(isNaN(id)){
            res.render('error404')
        }
        else if (!places[id]){
            res.render('error404')
        }
        else {
            places.splice(id,1)
            res.redirect('/places')
        }
    })







module.exports = router