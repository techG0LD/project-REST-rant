const React = require('react')
const Def = require('../default.jsx')


function comment_form(data) {
    return (
        <Def>
            <main>
                <h1>Add Comment</h1>
                <form method="POST" action={`/places/${data.id}`}>
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
            </main>
            
        </Def>
    )
}






module.exports = comment_form