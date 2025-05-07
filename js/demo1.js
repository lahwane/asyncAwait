'use strict'

async function runDemo() {
    const res = await axios.get('https://yesno.wtf/api')
    console.log('Ans:', res.data)
    
    // axios.get('https://yesno.wtf/api')
    //     .then(res => console.log('Ans:', res.data))
}