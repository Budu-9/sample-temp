const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our HomePage')
    }
    if(req.url === '/about'){
        res.end('We are Here')
    }
    res.end(`
    <h1>Oops</h1>
    <p>This page doesn't exist
    <a href="/">Home</a>
    `)
})

server.listen(8878)