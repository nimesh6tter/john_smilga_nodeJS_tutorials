//READ A FILE WITH PROMISES.. LESS CODE THAN 3.JS
const { reject } = require("lodash");
const fs = require('fs')

fs.promises
    .readFile('./Async-awaitES6 -in10min/test.txt', {encoding: 'utf-8'})
    .then((data)=>console.log(data))
    .catch((err)=>console.error(err))