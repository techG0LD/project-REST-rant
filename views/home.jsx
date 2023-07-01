const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1><a href="/places">REST-Rant</a></h1>
                <div>
                    {/* //setting the width of image */}
                    <img width={100} src="/images/meats.jpg" alt="meats"></img> 
                    <div className='text-center'>
                    Photo by <a href="https://unsplash.com/@victoriakosmo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Victoria Shes</a> on <a href="https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
                    </div>
                </div>
                <div className='text-center'>
                    <a href="/places">
                        <button className="btn-primary">Places Page</button>
                    </a>
                </div>
                
            </main>
        </Def>
    )
}

module.exports = home