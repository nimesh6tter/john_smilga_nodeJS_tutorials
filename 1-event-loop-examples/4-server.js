const http = require('http')
const port = 5000

const server = http.createServer((req, res)=>{
    console.log('req event')
    res.end('hello world')
})

server.listen(port, fx)

function fx(){
    console.log(`Server is listning to port ${port}`)
}