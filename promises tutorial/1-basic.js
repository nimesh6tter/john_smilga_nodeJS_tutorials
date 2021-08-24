let mypromise = new Promise((resolve, reject)=>{
    let isclean = false;

    if(isclean) resolve('clean')
    else reject('not clean')

})

mypromise.then((frmresolv)=>{
    console.log('the room is '+ frmresolv)
}).catch((frmrej)=>{
    console.log('the room is '+ frmrej)
})
