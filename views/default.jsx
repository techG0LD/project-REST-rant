const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>{html.title  || 'Default'}</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>
                {/* <link rel="stylesheet" href=""></link> */}
                <link rel="stylesheet" href="/css/style.css"></link>
                <link rel ="shortcut icon" type='image/jpg' href='https://s-media-cache-ak0.pinimg.com/736x/d9/da/0f/d9da0fa3c05f0e1c9e288abe95557312.jpg'/>
            </head>
            <body>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/places">Places</a></li>
                        <li><a href="/places/new">Add Place</a></li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def