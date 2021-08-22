const { readFileSync, writeFileSync } = require('fs')
console.log('Start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

// writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second}`, {flag: 'a'})
writeFileSync('./content/result-sync.txt','hey hey', {flag: 'a'})

console.log('done with this task')
console.log('starting the next one')
//suncronous is reading the code line by line
