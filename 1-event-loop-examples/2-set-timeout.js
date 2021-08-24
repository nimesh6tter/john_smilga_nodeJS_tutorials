console.log('first')
setTimeout(()=>{
  console.log('second') // get offloaded
}, 1000)
console.log('third')