const React = require('react')
const Def = require('../default.jsx')


function edit_form(data) {
    // console.log(data)  check what data object you have
    return (
        <Def>
            <main>
                <h1>Edit Page</h1>
                <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                <div className='row'>
                <div className='form-group col-sm-6'>
                    <label htmlFor="name">Place Name</label>
                    <input className='form-control' id="name" name="name" defaultValue = {data.name} required/>
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor="pic">Place Picture</label>
                    <input className='form-control' id="pic" name="pic" defaultValue ={data.pic} />
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor="city">City</label>
                    <input className='form-control' id="city" name="city"  defaultValue ={data.city}/>
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor="state">State</label>
                    <input className='form-control' id="state" name="state"  defaultValue ={data.state}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className='form-control' id="cuisines" name="cuisines"  defaultValue ={data.cuisines} required />
                </div>
                <div className='form-group'>
                    <label htmlFor='founded'>Founded</label>
                    <input className='form-control' id='founded' name="founded" defaultValue={data.founded}></input>
                </div>
                    <input className='btn btn-primary' type="submit" value="Update Place" />
                </div>
                </form>
            </main>
            
        </Def>
    )
}






module.exports = edit_form