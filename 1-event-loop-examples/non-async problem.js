const http = require('http')
const port = 5000

const server = http.createServer((req, res)=>{
    if(req.url == '/'){
      res.end('Home Page')
    }
    if(req.url == '/about'){
      //BLOCKING CODE
      for(let i = 0 ; i < 300; i++){
        for(let j = 0 ; j < 300; j++){
          console.log(`${i} ${j}`)
        }
      }
      res.end('About Page')
    }
    res.end('Error page')
})

server.listen(port, fx)

function fx(){
    console.log(`Server is listning to port ${port}`)
}