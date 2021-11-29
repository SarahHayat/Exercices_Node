const crypto = require('crypto')

const casino = () => {
    // for (let i = 0; i < 10; i++) {
    var number1 = crypto.randomInt(0, 3)
    var number2 = crypto.randomInt(0, 3)
    var number3 = crypto.randomInt(0, 3)
    console.log(`${number1} ${number2} ${number3}`);
    // }
}

casino()