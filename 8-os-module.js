const os = require('os')
//info about currunt user
const user = os.userInfo()
//console.log(user)

// system uptime in seconds

console.log(`The system uptime is ${os.uptime()} secs`)
