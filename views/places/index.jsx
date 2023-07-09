const React = require('react')
const Def = require('../default')

function index(data){
    let placesFormatted = data.places.map((place) =>{
         return (
        
            <div className="col-sm-6" key = {data.places.indexOf(place)}>
                <h2>
                   <a href={`/places/${place.id}`}>
                        {place.name}
                    </a> 
                </h2>
                <p className='text-center'>
                    {place.cuisines}
                </p>
                {/* width = {400} height={400} */}
                <img   src={place.pic} alt={place.name}/>
                <div className='text-center'>
                   Photo by <a href={place.att1}>{place.attN}</a> on <a href={place.att2}>Unsplash</a> 
                </div>
                <p className='text-center'>
                    Located in {place.city}, {place.state}
                </p>
            </div>
        
        )

    })
   
    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className='row'>
                    {placesFormatted}
                </div>
                
            </main>
        </Def>
    )
}

module.exports = index