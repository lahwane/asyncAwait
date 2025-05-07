'use strict'

async function runDemo() {
    const x = await delay(1500)
    console.log('After time', x)  

    // delay(1500)
    //     .then(x => console.log('After time', x))
    
}

function delay(t) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, t, t)
    })
}