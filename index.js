//MODULES and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()



// EXPRESS SETTINGS
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

//  Controllers & Routes
app.use('/places', require('./controllers/places'))


app.get('/', (req,res) => {
    res.render('home',{title: 'Home'})  //passing in a objext to use in the home view 
})

app.get('*', (req,res) => {
    res.status(404).render('error404')
})

app.listen(process.env.PORT, function(){
    console.log(`http://localhost:${process.env.PORT}`)
})