const router = require('express').Router()
const db = require('../models')
// const places = require('../models/places.js')


    // Route to index page
    router.get('/', (req,res) => {
        db.Place.find()
        .then((places) => {
            res.render('places/index', {places})
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
        
    })

    // ROUTE TO EDIT PAGE
    router.get('/:id/edit', (req,res) => {
        let id= Number(req.params.id)
        console.log(id)
        if(isNaN(id)){
            res.render('error404')
        }
        else if (!places[id]){
            res.render('error404')
        }
        else {
           res.render('places/edit',{places:places[id],id})   //passing in data from the url to the view via query parameter
        }
        
    })



    //  FORM PLACE TO ADD PLACE
    router.get('/new', (req,res) => {
        res.render('places/new')
    })

    //  POST ROUTE : NEW PLACE ON INDEX PAGE
    router.post('/', (req,res) => {

        db.Place.create(req.body)
        .then(() => {
            res.redirect('/places')   //redirects to the index page GET route)
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
          
        // if(!req.body.pic) {
        //     //Default image if one is not provided
        //     req.body.pic = 'https://placekitten.com/400/400'
        // }

        // if(!req.body.city) {
        //     //Default city if one is not provided
        //     req.body.city = 'Earth'
        // }

        // if(!req.body.state) {
        //     //Default state if one is not provided
        //     req.body.state = 'Milky Way'
        // }

        // places.push(req.body)   ///adds the new default code to the places array or the elment in the places array ,not sure

        //  console.log(req.body)  //can check if your info is being recieved in  the backend via POST method from the form

        // res.render('places/index', {places})  this works but you need to pass in the places array unless it will give map error

        
    })


    // Route Show Place Page
    router.get('/:id', (req,res) => {
        db.Place.findById(req.params.id)
        .then(place => {
             res.render('places/show', {place})  //redirects to the index page GET route)
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })


        // let id = Number(req.params.id)
        // if(isNaN(id)){     //checks if id is a number 
        //     res.render('error404')
        // }
        // else if (!places[id]) {       //second check is to see if that id has a corressponding index in the places array .. if not then go into this else if condition
        //     res.render('error404')
        // }
        // else {            //once passing both checks. show page of place
            //moved res.render in the mongo code then callback
        // }
    })

    router.delete('/:id', (req,res) => {
        let id= Number(req.params.id)
        console.log(req.params)
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

    // PUT ROUTE
    router.put('/:id', (req,res) => {
        let id = Number(req.params.id)

        console.log(req.params)
        if(isNaN(id)) {
            res.render('error404')
        }
        else if (!places[id]) {
            res.render('error404')
        }
        else {
            if(!req.body.pic){
                req.body.pic = 'http://placekitten.com/400/400'
            }
            if(!req.body.city){
                req.body.city = 'Anytown'
            }
            if(!req.body.state){
                req.body.state = 'USA'
            }
            //save the new data into places[id]
            places[id] = req.body
            res.redirect(`/places/${id}`)
        }
    })







module.exports = router