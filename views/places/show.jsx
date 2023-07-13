const React = require('react')
const Def = require('../default')


function show(data) {
    console.log(data)
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )

    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div key={data.place._id} className='border'>   
                    <h2 className='rant'>{c.rant ? 'Rant! |:<'  : "Rave! :D"}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    
    return (
        <Def>
            <main>
                <div className='row'>
                    <div className='col-sm-6'>
                        <img src={data.place.pic} alt={data.place.name}/>
                        <h3>Located in {data.place.city}, {data.place.state}</h3>
                    </div>

                    <div className='col-sm-6'>
                        <h1>{data.place.name}</h1>
                        <div>
                            <h3>Rating</h3>
                            <p>Not Rated</p>
                        </div>

                        <h2>Description</h2>
                        <h3>{data.place.showEstablished()}</h3>
                        <h4>Serving {data.place.cuisines}</h4>

                        <div>
                            <a href={`/places/${data._id}/edit`} className="btn btn-warning">Edit</a>
                            <form method = "POST" action={`/places/${data._id}?_method=DELETE`}>
                            <button type="submit" className="btn btn-danger">Delete</button>
                            </form>
                        </div>
                        
                    </div>

                </div>
                    
               <br></br>
               
                <div>
                    <h2>Comments</h2>
                    {comments}
                </div>

                <div>
                <form method="POST" action={`/places/${data._id}`}>
                <div className='row'>
                <div className='form-group col-sm-6'>
                    <label htmlFor="author">Author Name</label>
                    <input className='form-control' id="author" name="author"  required/>
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor="content">Comment</label>
                    <input className='form-control' id="content" name="content" type="textarea" />
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor="stars">Rating</label>
                    <input className='form-control' id="stars" name="stars" type='number' step='0.5' required/>
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor="rant">Rant</label>
                    <input  id="rant" name="rant"  type='checkbox'/>
                </div>
                    <input className='btn btn-primary' type="submit" value="Add Comment" />
                </div>
                </form>
                </div>


                
            </main>
            
        </Def>
    )
}






module.exports = show