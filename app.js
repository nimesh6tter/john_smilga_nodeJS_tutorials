const { reject } = require("lodash")

console.log('person1: shows ticket')
console.log('person2: shows ticket')

const promiseWifeBringsTicks = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Ticket')
    }, 0);
})

const getPopcorn = promiseWifeBringsTicks.then((t)=>{
    console.log('wife : I have tics')
  console.log('hus : lets go in')
  console.log('wife : hungry')
  return new Promise((resolve, reject)=>{
      resolve(`${t} popcorn`)
  })
})

const getButter = getPopcorn.then((t)=>{
    console.log('hus : I have popcrn now')
  console.log('hus : lets go in')
  console.log('wife : need butter')

  return new Promise((resolve, reject)=>{
      resolve(`${t} butter`)
  })
})

getButter.then((t)=>console.log(t))
console.log('person4: shows ticket')
console.log('person5: shows ticket')