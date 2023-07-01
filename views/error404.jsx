const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1>
                    404: PAGE NOT FOUND
                </h1>
                <p className='text-center'>Oops, sorry, we can't find this page!</p>
                <div>
                    {/* //setting the width of image */}
                    <img width={600}  src="/images/404.jpg" alt="meats"></img> 
                    <div>
                    Photo by <a href="https://unsplash.com/it/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NASA</a> on <a href="https://unsplash.com/images/nature/space?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
                    </div>
                </div>
                <a href="/">
                    <button className="btn-primary">Home Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = error404