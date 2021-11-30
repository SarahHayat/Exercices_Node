const fs = require('fs')

function readFile(path, options = {}) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, options, (err, data) => {
            if (err) return reject(err)
            resolve(data)
        })
    })
}

const callBackRead = (err, data) => {
    console.log(err);
    console.log(data);
    // callback
}

// fs.readFile('hello.txt', {encoding: 'utf-8'}, (err, data) => {
//     return 1
// })

const promise = readFile('hello.txt', {encoding: 'utf-8'})

promise.then(data => {
    console.log('Data : ', data);
})
    .catch(err => {
        console.log('Error : ', err);
    })
    .finally(() => {
        console.log('Finito');
    })

const test = async () => {
    try {
        const data = await readFile('hello.txt', {encoding: 'utf-8'})
        console.log('Data : ', data);
    }
    catch (error) {
        console.error('Error : ', error);
    }
    finally {
        console.log('Finis');
    }
}

test()