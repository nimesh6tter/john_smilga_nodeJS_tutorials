const { result } = require("lodash")

let cleanRoom = ()=>{
    return new Promise((resolve, reject)=>{
        resolve('Cleaned the room ')
    })
}
let removegarbage = (message)=>{
    return new Promise((resolve, reject)=>{
        resolve(message +'remove garbage ')
    })
}
let winIceCream = (message)=>{
    return new Promise((resolve, reject)=>{
        resolve(message +'won iceCream ')
    })
}

cleanRoom().then((result)=>{
    return removegarbage(result)
}).then((result)=>{
    return winIceCream(result)
}).then((result)=>{
    console.log('Finished -'+ result)
})

Promise.all([cleanRoom(), removegarbage(), winIceCream()]).then(()=>{
    console.log('All finished')
})

Promise.race([cleanRoom(), removegarbage(), winIceCream()]).then(()=>{
    console.log('one of them finished')
})