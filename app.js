const fetch = require('node-fetch')

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.error(err))