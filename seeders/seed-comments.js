const db = require('../models')

//to use await,we need an async function
async function seed(){
    //Get the place,Chicas Taco
    let place = await db.Place.findOne({name : 'Chicas Taco'})

    //Create a fake sample comment
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars:5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    //create second comment by making comment2 variable and pushing comment2 like below

    //Add that comment to the place's comment array
    place.comments.push(comment.id)

    //save the place now that it has comment
    await place.save()

    //exit the program
    process.exit()
}

seed()