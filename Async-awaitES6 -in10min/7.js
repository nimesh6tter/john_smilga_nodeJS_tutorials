const fs = require('fs')

const loadfile = async()=>{
    try{
        const data = await fs.promises.readFile('./Async-awaitES6 -in10min/test.txt',{encoding: 'utf-8'})
    console.log(data)
    }
    catch(error){
        console.error(error)
    }
}

loadfile()