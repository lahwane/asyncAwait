'use strict'

async function runDemo() {
    const prm1 = Promise.resolve(18)
    const prm2 = askUser()
    const prm3 = Promise.resolve(11)
    
    const prms = [prm1, prm2, prm3]
    
    const values = await Promise.all(prms)
    console.log('Values', values)
    
    // Promise.all(prms)
    //     .then(values => console.log('Values', values))
    //     .catch(() => console.log('User said no!'))
}

async function askUser(title = 'Sure?') {
    const options = { title, showDenyButton: true }
    
    const { value } = await Swal.fire(options)
    return value
    
    // return Swal.fire(options)
    //     .then(({ value }) => {
    //         if (!value) throw new Error('User Canceled!')
    //         return value
    //     })
}