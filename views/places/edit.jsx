const React = require('react')
const Def = require('../default.jsx')


function edit_form(data) {
    return (
        <Def>
            <main>
                <h1>Edit Page</h1>
                <form method="POST" action={`/places/${data.places.id}?_method=PUT`}>
                <div className='row'>
                <div className='form-group col-sm-6'>
                    <label htmlFor="name">Place Name</label>
                    <input className='form-control' id="name" name="name" defaultValue = {data.places.name} required/>
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor="pic">Place Picture</label>
                    <input className='form-control' id="pic" name="pic" defaultValue ={data.places.pic} />
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor="city">City</label>
                    <input className='form-control' id="city" name="city"  defaultValue ={data.places.city}/>
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor="state">State</label>
                    <input className='form-control' id="state" name="state"  defaultValue ={data.places.state}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className='form-control' id="cuisines" name="cuisines"  defaultValue ={data.places.cuisines} required />
                </div>
                    <input className='btn btn-primary' type="submit" value="Add Place" />
                </div>
                </form>
            </main>
            
        </Def>
    )
}






module.exports = edit_form