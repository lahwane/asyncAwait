'use strict'

async function runDemo() {
    const res = await doConfirm()
    console.log('User Decided:', res)

    // doConfirm()
    //     .then(res => {
    //         console.log('User Decided:', res)
    //     })
}

async function doConfirm(title = 'Are you sure?') {
    const res = confirm(title)
    return res
}

// function doConfirm(title = 'Are you sure?') {
//     const res = confirm(title)
//     return Promise.resolve(res)
// }