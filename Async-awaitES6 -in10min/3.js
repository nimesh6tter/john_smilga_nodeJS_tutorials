//error first callback
const fs = require('fs')

fs.readFile('./Async-awaitES6 -in10min/test.txt',{ encoding: 'utf-8' }, (err, data)=>{
    if(err){
        console.error('ERROR')
        console.error(err)
    } else {
        console.error('GOT DATA')
        console.log(data)
    }
})x
