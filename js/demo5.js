'use strict'

async function runDemo() {

    try {
        const user = await getUser('baba')
        console.log('User', user)
    } catch (err) {
        console.log('Had error getting a user', err)
    }
    console.log('Done')

    // getUser('baba')
    //     .then(user => {
    //         console.log('User', user)
    //     })
    //     .catch(err => {
    //         console.log('Had error getting a user', err)
    //     })
}

async function getUser(name) {
    const user = { id: 'u101', fullName: name }

    if (Math.random() > 0.5) {
        return user
    } else {
        throw 'Not Now!'
    }

    // if (Math.random() > 0.5) {
    //     return Promise.resolve(user)
    // } else {
    //     return Promise.reject('Not Now!')
    // }
}