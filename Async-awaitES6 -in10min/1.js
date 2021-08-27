//callback hell

setTimeout(() => {
    console.log('3')
    setTimeout(() => {
        console.log('2')
        setTimeout(() => {
            console.log('1')
        }, 1000);
    }, 1000);
}, 1000);