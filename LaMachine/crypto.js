const crypto = require('LaMachine/crypto')

const casino = () => {
    let j = 0;

    for (let i = 0; i < 100; i++) {
        var number1 = get_symboles(crypto.randomInt(0, 8))
        var number2 = get_symboles(crypto.randomInt(0, 8))
        var number3 = get_symboles(crypto.randomInt(0, 8))
        console.log(`${number1} ${number2} ${number3}`);
        if (number1 === number2 && number2 === number3) {
            j++;
        }
    }
    console.log(j);

}

function get_symboles(nb) {
    switch (nb) {
        case 0:
            return "♠";
        case 1:
            return "♥";
        case 2:
            return "♦";
        case 3:
            return "♣";
        case 4:
            return "ø";
        case 5:
            return "&";
        case 6:
            return "%";
        case 7:
            return "$";
    }
}

casino()