//error first callback READ A FILE WITHOUT PROMISES 
const fs = require('fs')

fs.readFile('./Async-awaitES6 -in10min/test.txt',{ encoding: 'utf-8' }, (err, data)=>{
    if(err){
        console.error('ERROR')
        console.error(err)
    } else {
        console.error('GOT DATA')
        console.log(data)
    }
})
